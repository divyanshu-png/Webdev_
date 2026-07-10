document.addEventListener('DOMContentLoaded', () => {
  const x = document.getElementById("paragraph");
  //The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string.

  const y = document.getElementsByTagName("p");
  //The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name

  const z = document.getElementsByClassName("demo");
  //the getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

  /* Finding HTML Elements by CSS Selectors */
  document.querySelector(".demo");
  document.querySelectorAll(".demo");

  /*
  Finding HTML ELEMENTS BY HTML Object Collections
  */
        const resultEl = document.getElementById("result");
        const form = document.getElementById("frm1");

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault(); // stop the form from submitting and reloading the page

                let text = "";
                const elems = form.elements;
                for (let j = 0; j < elems.length; j++) {
                    if (elems[j].type && elems[j].type.toLowerCase() === 'submit') continue;
                    text += elems[j].value + "<br>";
                }

                if (resultEl) resultEl.innerHTML = text; // use innerHTML so <br> renders as line breaks
            });
        }
});