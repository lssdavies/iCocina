module.exports = {
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  breaklines(text) {
    const newText = text.replace(/(\r\n|\n|\r)/gm, "<br>");
    return newText;
  },
};
