import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../styles/Certificate.css';

export default function Certificate({ certificate, userName, onClose }) {
  const certificateRef = useRef();

  const downloadCertificate = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
    pdf.save(`${certificate.courseName}-certificate.pdf`);
  };

  const printCertificate = () => {
    const printWindow = window.open('', '', 'height=600,width=900');
    const element = certificateRef.current;
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="certificate-container" ref={certificateRef}>
          <div className="certificate-border">
            <div className="certificate-content">
              <div className="certificate-header">
                <h1>Certificate of Completion</h1>
              </div>

              <div className="certificate-body">
                <p className="certificate-text">This is to certify that</p>

                <p className="certificate-name">{userName}</p>

                <p className="certificate-text">has successfully completed the course</p>

                <p className="certificate-course">{certificate.courseName}</p>

                <div className="certificate-details">
                  <div className="detail-item">
                    <p className="detail-label">Course Credits</p>
                    <p className="detail-value">{certificate.credits}</p>
                  </div>
                  <div className="detail-item">
                    <p className="detail-label">Instructor</p>
                    <p className="detail-value">{certificate.instructor}</p>
                  </div>
                  <div className="detail-item">
                    <p className="detail-label">Completion Date</p>
                    <p className="detail-value">{certificate.completionDate}</p>
                  </div>
                </div>

                <div className="certificate-footer">
                  <div className="signature-line">
                    <p className="signature-name">___________________</p>
                    <p className="signature-title">Course Instructor</p>
                  </div>
                  <div className="signature-line">
                    <p className="signature-name">___________________</p>
                    <p className="signature-title">Course Coordinator</p>
                  </div>
                </div>

                <p className="certificate-id">Certificate ID: {certificate.certificateId}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="certificate-actions">
          <button className="btn btn-primary" onClick={downloadCertificate}>
            Download PDF
          </button>
          <button className="btn btn-secondary" onClick={printCertificate}>
            Print
          </button>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
