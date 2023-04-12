export const pagesList = {
  startPage: 'Выберите режим',
  // Dictionary
  fillDictionaryPage: 'Словарь',
  addWordsPage: 'Добавление слова',
  wordEditingPage: 'Редактирование слова',
  // Knowledge
  checkKnowledgePage: 'Проверка знаний',
  resultPage: 'Результат проверки знаний',
}

// TODO: в стейте проверять и при килке менять страинцу и отрисовку компонентов, заменять заголовок в замисимости от страинцы

export type pagesList = (typeof pagesList)[keyof typeof pagesList];

export const isPage = (page: unknown): page is pagesList => Object.values(pagesList).includes(page as pagesList);