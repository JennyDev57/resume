import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { useState } from 'react'

const DEFAULT_LABELS: Record<string, string> = {
    fr: 'Exporter en PDF',
    en: 'Export as PDF',
}

export function ExportPdfContent() {
    const { language, resolve } = useTranslation()
    const [isLoading, setIsLoading] = useState(false)

    const handleExportPdf = async () => {
        try {
            setIsLoading(true)

            // Dynamically import
            const { jsPDF } = await import('jspdf')
            const html2canvas = (await import('html2canvas')).default

            // Get the resume content
            const resumeCard = document.querySelector('.bg-resume-bg-card')
            if (!resumeCard) {
                console.error('Resume card not found')
                return
            }

            // create a semi-transparent overlay with spinner so the page remains visible
            const overlay = document.createElement('div')
            overlay.setAttribute('data-export-overlay', 'true')
            Object.assign(overlay.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255,255,255,0.8)',
                zIndex: '9999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            })
            // inject spinner styles once
            if (!document.getElementById('export-spinner-styles')) {
                const spinnerStyles = document.createElement('style')
                spinnerStyles.id = 'export-spinner-styles'
                spinnerStyles.textContent = `
.export-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
                `
                document.head.appendChild(spinnerStyles)
            }
            // add spinner element
            const spinner = document.createElement('div')
            spinner.setAttribute('class', 'export-spinner')
            overlay.appendChild(spinner)
            document.body.appendChild(overlay)

            // First, expand all collapsible items by clicking their buttons
            const expandableButtons = Array.from(document.querySelectorAll('button[aria-expanded="false"]'))
            for (const button of expandableButtons) {
                (button as HTMLButtonElement).click()
            }

            // Wait for animations to complete (overlay hides them)
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Temporarily hide problematic classes for html2canvas
            const originalClasses = new Map<Element, string>()
            const originalStyles = new Map<Element, string>()
            resumeCard.querySelectorAll('*').forEach(el => {
                if (el instanceof HTMLElement) {
                    const classList = Array.from(el.classList)
                    const filtered = classList.filter(cls => !cls.match(/^(bg-resume-|text-resume-|border-resume-|shadow-|dark:|line-through|strikethrough)/))
                    originalClasses.set(el, el.className)
                    el.className = filtered.join(' ')

                    // Remove backgroundColor from badge elements (short text elements with backgroundColor)
                    if (el.style.backgroundColor && el.style.color) {
                        originalStyles.set(el, el.getAttribute('style') || '')
                        // Clear the backgroundColor to show only text color
                        const styleStr = el.getAttribute('style') || ''
                        const newStyle = styleStr.replace(/background-color:\s*[^;]+;?/i, '')
                        if (newStyle.trim()) {
                            el.setAttribute('style', newStyle)
                        } else {
                            el.removeAttribute('style')
                        }
                    }

                    // Hide the back face (the emoji face) - it will have attribute with rotateY in style
                    const styleAttr = el.getAttribute('style') || ''
                    if (styleAttr.includes('rotateY') || styleAttr.includes('backfaceVisibility')) {
                        // Check if this contains an image - if not, it's likely the emoji side
                        if (!el.querySelector('img')) {
                            originalStyles.set(el, el.getAttribute('style') || '')
                            el.style.display = 'none'
                        }
                    }
                }
            })

            try {
                // Render with filtered classes
                const canvas = await html2canvas(resumeCard as HTMLElement, {
                    scale: 2,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff',
                    allowTaint: true,
                    foreignObjectRendering: false,
                    proxy: undefined,
                })

                // Create PDF
                const imgData = canvas.toDataURL('image/png')
                const pdfWidth = 210 // A4 width in mm
                const pdfHeight = 297 // A4 height in mm
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4',
                })

                const imgWidth = pdfWidth - 10 // margins (5mm on each side)
                const imgHeight = (canvas.height * imgWidth) / canvas.width

                // If image fits on one page, just add it
                if (imgHeight <= pdfHeight - 10) {
                    pdf.addImage(imgData, 'PNG', 5, 5, imgWidth, imgHeight)
                } else {
                    // Image spans multiple pages - split and add each part
                    const canvasPageHeight = (canvas.width / imgWidth) * (pdfHeight - 10)
                    let currentPage = 0
                    let heightRemaining = canvas.height

                    while (heightRemaining > 0) {
                        if (currentPage > 0) {
                            pdf.addPage()
                        }

                        // Calculate the height of this page section in the canvas
                        const pageHeight = Math.min(canvasPageHeight, heightRemaining)
                        const startY = currentPage * canvasPageHeight

                        // Create a temporary canvas for this page section
                        const pageCanvas = document.createElement('canvas')
                        pageCanvas.width = canvas.width
                        pageCanvas.height = pageHeight
                        const ctx = pageCanvas.getContext('2d')
                        if (ctx) {
                            ctx.drawImage(canvas, 0, -startY)
                            const pageImgData = pageCanvas.toDataURL('image/png')
                            const pageImgHeight = (pageHeight * imgWidth) / canvas.width
                            pdf.addImage(pageImgData, 'PNG', 5, 5, imgWidth, pageImgHeight)
                        }

                        heightRemaining -= canvasPageHeight
                        currentPage++
                    }
                }

                // Download PDF
                const filename = `resume_${language}_${new Date().getTime()}.pdf`
                pdf.save(filename)
            } finally {
                // Restore original classes
                originalClasses.forEach((className, el) => {
                    if (el instanceof HTMLElement) {
                        el.className = className
                    }
                })

                // Restore original styles
                originalStyles.forEach((style, el) => {
                    if (el instanceof HTMLElement) {
                        if (style) {
                            el.setAttribute('style', style)
                        } else {
                            el.removeAttribute('style')
                        }
                    }
                })

                // Collapse all items back
                const allExpandedButtons = Array.from(document.querySelectorAll('button[aria-expanded="true"]'))
                for (const button of allExpandedButtons) {
                    (button as HTMLButtonElement).click()
                }
            }
        } catch (error) {
            console.error('Error exporting PDF:', error)
            alert(language === 'fr' ? 'Une erreur est survenue lors de l\'export PDF' : 'An error occurred while exporting PDF')
        } finally {
            setIsLoading(false)
            // remove overlay if it was added
            const existingOverlay = document.querySelector('div[data-export-overlay]')
            if (existingOverlay && existingOverlay.parentNode) {
                existingOverlay.parentNode.removeChild(existingOverlay)
            }
        }
    }

    const resolveExportLabel = () => {
        if (resumeConfig.labels.actions.exportPdf) {
            return resolve(resumeConfig.labels.actions.exportPdf)
        }
        return DEFAULT_LABELS[language] ?? DEFAULT_LABELS.en ?? 'Export as PDF'
    }

    return (
        <button
            onClick={handleExportPdf}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
            <DownloadIcon className="w-4 h-4" />
            {isLoading ? 'En cours...' : resolveExportLabel()}
        </button>
    )
}
