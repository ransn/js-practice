// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     })
//   })
// };

// Equivalent

const fetchData = async () => {
  const resp = await fetch("https://api.github.com");
  const data = await resp.json();
  console.log(data);
};
