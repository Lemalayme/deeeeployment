import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';

export default function DocumentsPage() {
  // Массив с PDF документами
  const pdfDocuments = [
    {
      title: "Свидетельства ИНН и ОГРН ДМИТРОВДОР",
      file: "/Svidetelstvo.pdf"
    },
    {
      title: "Решение и приказ о продлении полномочий гендира Дмитровдор до 24.11.2023 г",
      file: "/Prodlenie.pdf"
    },
    {
      title: "СРО ДМИТРОВДОР",
      file: "/documents/CPO.pdf"
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start mb-4">
                  <FaFilePdf className="text-red-500 text-4xl flex-shrink-0 mr-4 mt-1" />
                  <h2 className="text-xl font-semibold text-gray-800 line-clamp-3">{doc.title}</h2>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link 
                  href={doc.file} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Открыть документ
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
}