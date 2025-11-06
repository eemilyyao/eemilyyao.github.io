$(document).ready(function() {
    const messages = [
      "you got some fat lips 👄",
      "how much i owe you gawd 🤔",
      "i tried your services now u try mine that’s how the economy works",
      "we doin this or what a) yes b) nah really c) i am police d) i’m that flyer motherfucker pretending someone purchased my services to get other people to pay me to post their flyers you know this because it’s written in exactly the same style e) your messages got lost in a tidal wave of sexts because dam them be some juicy lips and mad niggas be thirsty",
      "you need to stop playing games with your eyebrows lady",
      "have it your way dry eyes",
      "send nudes",
      "Got plans for Halloween?",
      "Can you cry for me I’m dieing",
      "$1/Tear how fat are the tears ? I got some real pain my heart 😔",
      "You cry during sex?",
      "I’m interested in having you cry for me",
      "Ur funny asf. Hope ur making bank.",
      "hi, i need to cry. thanks.",
      "I need a good cry and someone to lean on😿😿😿",
      "Bro I gotta know is this fr??",
      "hi i cried 4 tears reading ur poster so i owe u $4",
      "Can you cry for me tonight ??",
      "You cry for me?",
      "help Bruh",
      "If I send you a dollar, will you really shed a tear for me? 🥺👉🏽👈🏽",
      "Well what’s the most you ever cried for someone?",
      "hey how does ur service work?",
      "What does it mean to cry? What is the method upon which you cry? Do you use onions? I am genuinely intrigued. I have not cry in a long tie. If you cry will I be baby? like crybaby.",
      "Someone posted your sign on snap about crying or something and I saw your email and decided to email you lol. Hello from Germany lol ok bye have a good day lol",
      "I’m in the army, so you take military discount?",
      "Hi you are beautiful I just thought I would let you know :)",
      "How many tears at once can you cry ? Just curious",
      "This is the poster and a pic of me- I just enjoy novelty and quirky posters so I figured I’d try and contact you",
      "How does it work? Let me know Thanks",
      "Do you cry half tears? I have 50 cents, and would like to make use of it.",
      "$1 per TEAR?",
      "Tears",
      "i want them all...",
      "Can you pull up to Los Angeles apparel and cry for like ten minutes on the men’s floor. I’ll give you $20",
      "Any bundle discounts? Can you do like $9 per 10 tears? Buy 10 tears get one free?",
      "Can you cry for me? I think 15 tears would be enough. Let me know how to arrange payment.."
    ];
  
    const colors = ["#32CD32", "#FF69B4", "#8A9EFF"]; 
    // lime green, bubblegum pink, periwinkle
  
    $(document).on("click", function(e) {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const bubble = $("<div class='text-bubble'></div>").text(randomMsg);
  
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.css({
        left: e.pageX + "px",
        top: e.pageY + "px",
        boxShadow: `0 0 25px ${randomColor}`,
        border: `3px solid ${randomColor}`
      });
  
      $("body").append(bubble);
      setTimeout(() => bubble.remove(), 3000);
    });
  });
  