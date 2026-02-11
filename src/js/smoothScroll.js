// smooth scroll adapted from: https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

const allLinks = document.querySelectorAll('a[href^="#"]')
allLinks.forEach(link => {
	const 
		targetSelector = link.getAttribute('href'),
		target = document.querySelector(targetSelector)

        if (target) {
            link.addEventListener('click', function(e) {

            e.preventDefault()

            const top = target.offsetTop // consider decreasing your main nav's height from this number

            window.scroll({
            behavior: 'smooth',
            left: 0,
            top: top
            });

        })
	}
})