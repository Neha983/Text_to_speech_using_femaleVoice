document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('narrate-btn').addEventListener('click', () => {
        // Define the text to be spoken
        const text = `
            Hello, welcome to my resume. I am Neha Avula, a web developer and designer.
            About me: I am passionate about creating dynamic and responsive websites. 
            I enjoy learning new technologies and continuously improving my skills.
            My skills include HTML, CSS and JavaScript. 
            I have worked on projects like a personal portfolio website and a blog platform.
            Feel free to contact me via email at xyz@example.com or phone at +123 456 7890. Thank you for visiting!
        `;

        // Use ResponsiveVoice to speak the text with a female voice
        responsiveVoice.speak(text, "UK English Female", {
            rate: 1,
            pitch: 1,
            volume: 1
        });
    });
});
