type EmailTemplateProps = {
  senderName: string;
  senderEmail: string;
  message: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderName,
  senderEmail,
  message,
}: EmailTemplateProps) => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
    <div className="w-full max-w-lg space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="mb-1 text-2xl font-bold">
          New message from {senderEmail}
        </h2>
        <p className="text-sm text-gray-500">{senderEmail}</p>
      </div>

      <div className="space-y-4">
        <p className="whitespace-pre-wrap text-gray-700">{message}</p>
        <p className="text-gray-700">Sender: {senderName}</p>
      </div>
    </div>
  </div>
);
