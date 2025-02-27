// utils/emailTemplate.ts
export const createEmailTemplate = (data: { name: string; email: string; message: string }) => {
    return `
      <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid #e2e8f0;
        font-family: Arial, sans-serif;
      ">
        <div style="
          padding: 1rem;
          background: hsl(199, 89%, 48%);
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        ">
          <h2 style="color: white; margin: 0;">Nuevo mensaje de ${data.name}</h2>
        </div>
        
        <div style="padding: 1rem;">
          <div style="margin-bottom: 1rem;">
            <p style="margin: 0; color: #64748b;"><strong>De:</strong> ${data.name}</p>
            <p style="margin: 0; color: #64748b;"><strong>Email:</strong> ${data.email}</p>
          </div>
          
          <div style="
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #e2e8f0;
          ">
            <p style="margin: 0; color: #1e293b; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            color: #64748b;
          ">
            <p style="margin: 0;">Este mensaje fue enviado desde el portafolio de Jean Garzón</p>
          </div>
        </div>
      </div>
    `;
  };