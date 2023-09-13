const divData = [
    {
        tag: 'Decode',
        imageUrl: 'http://cdn.onlinewebfonts.com/svg/img_72548.png',
        title: 'Cloned Fingerprints Scam: The Story Of Aadhaar Enabled Payment System',
        description: 'The AePS was launched in 2014 by the Indian government to empower...',
        author: 'Umesh Kumar Ray',
        date: '2 Days ago',
        link: 'https://www.msn.com/en-in/money/markets/cloned-fingerprints-scam-the-story-of-aadhaar-enabled-payment-system/ar-AA1gclbI'
    },
    {
        tag: 'Sports',
        imageUrl: 'http://cdn.onlinewebfonts.com/svg/img_72548.png',
        title: 'Asia Cup 2023: Fake Anti-BCCI Quote Falsely Attributed To Sunil Gavaskar',
        description: 'BOOM found that the quote is fake and Sunil Gavaskar has made no such...',
        author: 'Anmol Alphonso',
        date: '2 Days ago',
        link: 'https://www.boomlive.in/fact-check/sports/fake-news-sunil-gavaskar-criticising-bcci-cricket-hijacking-cricket-fake-quote-factcheck-22946?utm_source=Newswav&utm_medium=Website'
    },
    {
        tag: 'Fact Check',
        imageUrl: 'http://cdn.onlinewebfonts.com/svg/img_72548.png',
        title: 'AI-Generated Image of Amir Khan Viral As Lala Amarnath Biopic Look',
        description: 'BOOM found that the image has been generated using Artificial...',
        author: 'Awasti Chattejee',
        date: '8 Days ago',
        link: 'https://newsmeter.in/fact-check/ai-generated-photo-shared-as-aamir-khans-first-look-in-lala-amarnath-biopic-717189'
    },
    {
        tag: 'Fact Check',
        imageUrl: 'http://cdn.onlinewebfonts.com/svg/img_72548.png',
        title: 'Image of Train Decorated With Flowers for Onam Is Fake',
        description: 'BOOM found that the image has been made using generative-AI and is not ...',
        author: 'Umesh Kumar Ray',
        date: '2 Days ago',
        link: 'https://www.indiatoday.in/fact-check/story/fact-check-this-kerala-station-decorated-flowers-onam-not-real-ai-generated-2427676-2023-08-28'
    }
];



// Get the container where you want to append the divs
const container = document.querySelector('.right');

// Iterate through the divData array and generate HTML for each div
divData.forEach(data => {
    const div = document.createElement('div');
    div.className = 'right-post';

    const tagCon = document.createElement('div');
    tagCon.className = 'tag-con';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = data.tag;

    const dotSet = document.createElement('div');
    dotSet.className = 'dot-set';

    const img = document.createElement('img');
    img.src = data.imageUrl;
    img.alt = '';

    const i = document.createElement('i');
    i.className = 'fa-solid fa-ellipsis-vertical';

    dotSet.appendChild(img);
    dotSet.appendChild(i);

    tagCon.appendChild(tag);
    tagCon.appendChild(dotSet);

    const titleLink = document.createElement('a');
    titleLink.href = data.link;
    titleLink.target = '_blank';
    titleLink.rel = 'noopener noreferrer';

    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = data.title;

    titleLink.appendChild(title);

    const description = document.createElement('p');
    description.textContent = data.description;

    const authorDate = document.createElement('p');
    authorDate.textContent = `- By ${data.author} | ${data.date}`;

    div.appendChild(tagCon);
    div.appendChild(titleLink);
    div.appendChild(description);
    div.appendChild(authorDate);

    container.appendChild(div);
});




// Animation for the left container to come from the left
gsap.from(".left-container", {
    x: "-100%", // Start off-screen to the left
    duration: 1.5,
    ease: "power4.out",
});

// Animation for the right posts to come from the top
gsap.from(".right-post:nth-child(1), .right-post:nth-child(2)", {
    y: "-100%", // Start off-screen above
    stagger: 0.5, // Delay between animations
    duration: 1,
    ease: "power4.out",
});

// Animation for the right posts to come from the bottom
gsap.from(".right-post:nth-child(3), .right-post:nth-child(4)", {
    y: "100%", // Start off-screen below
    stagger: 0.5, // Delay between animations
    duration: 1,
    ease: "power4.out",
});