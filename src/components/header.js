const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div")
  const dateArea = document.createElement("span")
  const titleArea = document.createElement("h1")
  const temperatureArea = document.createElement("span")

  headerDiv.classList.add("header")
  dateArea.classList.add("date")
  temperatureArea.classList.add("temp")

  dateArea.textContent = date
  titleArea.textContent = title
  temperatureArea.textContent = temp

  headerDiv.appendChild(dateArea)
  headerDiv.appendChild(titleArea)
  headerDiv.appendChild(temperatureArea)

  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector)
  headerContainer.appendChild(Header("Lambda", "January 6th", "26degrees"))
}

export { Header, headerAppender }