const typedTextSpan = document.querySelector(".typed-text");
      const cursorSpan = document.querySelector(".cursor");

      const textArray = ["my coding journey", "exciting javascript projects"];
      const typingDelay = 100; 
      const erasingDelay = 50; 
      const newTextDelay = 1000; 
      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          cursorSpan.classList.remove("typing");
          setTimeout(erase, newTextDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(type, typingDelay + 300);
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        if (textArray.length) setTimeout(type, newTextDelay + 250);
      });