// Select the <time> element from the DOM
const timeElement = document.querySelectorAll('time');

// Get the project date from the <time> element's `title` attribute
function getProjectDate(timeElement) {
  let projectDates = [];

  for (let time of timeElement) {
    projectDates.push(time.title);
  }

  return projectDates;
}
let projectDates = getProjectDate(timeElement);

// Get today's date
const todaysDate = new Date();

/**
 * Calculates the difference in days between two dates and updates the <time> element's text.
 * @param {Date} projectDates - The project date to compare.
 * @param {Date} todaysDate - Today's date.
 */
function updateDaysDifference(projectDates, todaysDate) {
  // Calculate the difference in milliseconds and convert it to days
  // console.log(projectDates);
  // console.log(todaysDate);
  for (const [index, date] of projectDates.entries()) {
    let dateFormat = new Date(date);

    const timeDifferenceInMilliseconds = todaysDate - dateFormat;

    const daysDifference = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    // Update the <time> element's text based on the difference
    if (daysDifference > 365) {
      const yearsDifference = Math.floor(daysDifference / 365);
      timeElement[index].innerText = `${yearsDifference} year ago`;
    } else if (daysDifference > 30) {
      const monthsDifference = Math.floor(daysDifference / 30);
      timeElement[index].innerText = `${monthsDifference} month(s) ago`;
    } else if (daysDifference > 1) {
      timeElement[index].innerText = `${daysDifference} days ago`;
    } else if (daysDifference === 1) {
      timeElement[index].innerText = `${daysDifference} day ago`;
    }
  }
}

// Call the function to update the days difference
updateDaysDifference(projectDates, todaysDate);
