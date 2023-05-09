export const handleClick = () =>{
    window.open("./Nitesh_Lanjewar-resume,.pdf")
    const url = "./Nitesh_Lanjewar-resume,.pdf";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Nitesh_Lanjewar-Resume,.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }