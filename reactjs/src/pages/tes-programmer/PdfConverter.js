import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

function PdfConverter() {
    const [inputText, setInputText] = useState(''); const handleConvert = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const helveticaFont = await pdfDoc.embedFont('Helvetica'); // Use font family name directly

        page.drawText(inputText, {
            x: 50,
            y: page.getSize().height - 50,
            font: helveticaFont,
            size: 12,
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'converted.pdf';
        link.click();
    };

    return (
        <div className='container'>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={10}
                cols={50}
            />
            <button onClick={handleConvert}>Convert to PDF</button>
        </div>
    );
}

export default PdfConverter;