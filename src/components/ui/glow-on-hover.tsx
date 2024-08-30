'use client';
export function Button({text,className}:{text: string,className?:string}) {

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        
        // Set the URL of the file
        link.href = '/resume.pdf';
        
        // Set the download attribute to suggest a file name
        link.download = 'my-document.pdf';
    
        // Append the link to the body (not visible)
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Remove the link from the body
        document.body.removeChild(link);
      };

  return (
    <button className={`glow-on-hover ${className ? className : ""}`}
    onClick={handleDownload}
    >
      {text}
    </button>
  );
}