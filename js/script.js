// Select the <time> element from the DOM
const timeElement = document.querySelectorAll('time');
console.log(timeElement);

// Get the project date from the <time> element's `title` attribute
function getProjectDate(timeElement) {
  let projectDates = [];

  for (let time of timeElement) {
    projectDates.push(time.title);
  }

  return projectDates;
}
let projectDates = getProjectDate(timeElement);
console.log(projectDates);

// const projectDate = new Date(timeElement.title);

// Get today's date
const todaysDate = new Date();

// /**
//  * Calculates the difference in days between two dates and updates the <time> element's text.
//  * @param {Date} projectDate - The project date to compare.
//  * @param {Date} todaysDate - Today's date.
//  */
// function updateDaysDifference(projectDate, todaysDate) {
//   // Calculate the difference in milliseconds and convert it to days
//   const timeDifferenceInMilliseconds = todaysDate - projectDate;
//   const daysDifference = Math.floor(
//     timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
//   );

//   // Update the <time> element's text based on the difference
//   if (daysDifference === 1) {
//     timeElement.innerText = `${daysDifference} day ago`;
//   } else {
//     timeElement.innerText = `${daysDifference} days ago`;
//   }
// }

// // Call the function to update the days difference
// updateDaysDifference(projectDate, todaysDate);

/**
 * Calculates the difference in days between two dates and updates the <time> element's text.
 * @param {Date} projectDates - The project date to compare.
 * @param {Date} todaysDate - Today's date.
 */
function updateDaysDifference(projectDates, todaysDate) {
  // Calculate the difference in milliseconds and convert it to days
  console.log(projectDates);
  console.log(todaysDate);
  for (const [index, date] of projectDates.entries()) {
    console.log(index, date);
    let dateFormat = new Date(date);
    console.log(dateFormat);
    const timeDifferenceInMilliseconds = todaysDate - dateFormat;
    console.log(timeDifferenceInMilliseconds);
    const daysDifference = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    // Update the <time> element's text based on the difference
    if (daysDifference === 1) {
      timeElement[index].innerText = `${daysDifference} day ago`;
    } else {
      timeElement[index].innerText = `${daysDifference} days ago`;
    }
  }
}

// Call the function to update the days difference
updateDaysDifference(projectDates, todaysDate);
