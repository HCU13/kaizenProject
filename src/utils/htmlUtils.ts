import {htmlToText} from 'html-to-text';

// HTML dizesinden düz metin çıkaran yardımcı işlev
export const extractTextFromHTML = (htmlString: string): string => {
  // htmlToText fonksiyonunu kullanarak HTML dizesini düz metine dönüştür
  return htmlToText(htmlString);
};
