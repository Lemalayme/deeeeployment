import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';

export default function DocumentsPage() {
  // Массив с PDF документами
  const pdfDocuments = [
    {
      title: "Техническая документация",
      description: "Полное техническое описание продукции и услуг",
      file: "/documents/tech-docs.pdf"
    },
    {
      title: "Руководство пользователя",
      description: "Инструкция по эксплуатации оборудования",
      file: "/documents/user-manual.pdf"
    },
    {
      title: "Сертификаты соответствия",
      description: "Официальные сертификаты качества продукции",
      file: "/documents/certificates.pdf"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Документация</h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            На этой странице вы можете ознакомиться с нашей документацией
          </p>
        </div>

        {/* Список документов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pdfDocuments.map((doc, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaFilePdf className="text-red-500 text-3xl mr-4" />
                  <h2 className="text-xl font-semibold text-gray-800">{doc.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{doc.description}</p>
                <Link 
                  href={doc.file} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Открыть документ
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Если у вас возникли проблемы с просмотром документов, пожалуйста, 
          </p>
        <Link rel="stylesheet" href="/" > свяжитесь с нами. </Link>
        </div>
      </div>
    </main>
  );
}