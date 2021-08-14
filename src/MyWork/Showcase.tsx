import { useState } from "react";
import images from "../images";

const Project = ({ img, design, code, preview }: { img: string, design?: string, code?: string, preview?: string }) => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(ps => !ps);
		setTimeout(() => !active ? setActive(false) : '', 10000);
	}

	const handleMouseLeave = () => {
		setActive(false);
	}

	return (<div onClick={handleClick} onMouseLeave={handleMouseLeave}>
		<img src={img} alt="" />
		<div className={[active ? 'active' : '', "project"].join(" ")}>
			{design ? <a target="_blank" rel="noreferrer" href={design}><svg id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m151 421c0-17.284-7.356-32.875-19.09-43.833l.006-.083c1.063-14.686 1.924-30.168 2.578-46.143 30.713 5.786 52.476 17.431 64.796 34.728 15.886 22.302 11.655 48.495 9.98 55.991-5.584 24.991 9.215 50.308 34.285 55.124 14.49 2.783 28.95 4.173 43.314 4.173 50.36 0 100.864-17.212 142.556-51.648 52.459-43.33 82.557-106.497 82.574-173.304.036-126.622-110.09-229.925-225.096-225.796-62.835 2.257-119.305 33.211-158.24 67.283-.498-4.643-1.019-9.164-1.564-13.548-2.856-22.982-6.23-41.2-10.028-54.149-2.614-8.916-8.738-29.795-26.071-29.795s-23.457 20.879-26.071 29.795c-3.798 12.949-7.171 31.167-10.028 54.149-5.74 46.185-8.901 107.289-8.901 172.056 0 42.314 1.412 84.184 4.084 121.083l.006.084c-11.734 10.958-19.09 26.549-19.09 43.833v31c0 16.262-14.196 30-31 30v30h61c49.55 0 90-41.067 90-91zm136.979-360.81c96.651-3.468 194.052 84.771 194.021 195.806-.016 57.831-26.142 112.57-71.679 150.183-45.002 37.17-103.726 52.165-161.106 41.144-8.352-1.604-12.552-10.684-10.666-19.121 3.023-13.532 7.632-48.412-14.823-79.938-17.618-24.735-47.273-40.72-88.256-47.619.348-14.693.527-45.763.527-46.323 5.845 6.811 13.587 11.714 22.444 14.087 24.021 6.437 48.706-7.907 55.114-31.82 6.422-23.968-7.853-48.691-31.82-55.113-18-4.823-35.97 1.971-46.646 15.164-.667-21.309-1.694-41.749-3.054-60.855 33.943-35.861 91.33-73.274 155.944-75.595zm-132.379 160.869c2.146-8.008 10.362-12.753 18.371-10.607 7.989 2.141 12.748 10.382 10.607 18.371-2.141 7.99-10.386 12.748-18.372 10.607-8.007-2.145-12.752-10.361-10.606-18.371zm-72.406-120.617c2.591-24.144 5.363-40.509 7.806-51.524 2.443 11.015 5.215 27.38 7.806 51.524 4.639 43.231 7.194 98.476 7.194 155.558 0 5.01-.021 10.012-.061 15h-29.878c-.04-4.988-.061-9.99-.061-15 0-57.082 2.555-112.327 7.194-155.558zm-6.649 200.548h28.91c-.514 21.183-1.389 41.784-2.604 61.191-3.833-.771-7.795-1.181-11.851-1.181s-8.018.41-11.851 1.181c-1.214-19.407-2.089-40.007-2.604-61.191zm-15.545 151.01v-31c0-16.542 13.458-30 30-30s30 13.458 30 30c0 33.635-26.916 61-60 61h-8.256c5.386-9.041 8.256-19.314 8.256-30z" /><path d="m402.673 202.967c17.586-17.585 17.59-46.051 0-63.64-17.544-17.545-46.094-17.546-63.64 0-17.586 17.585-17.59 46.051 0 63.64 17.545 17.545 46.094 17.546 63.64 0zm-42.427-42.426c5.849-5.848 15.364-5.849 21.214 0 5.863 5.863 5.863 15.35 0 21.213-5.851 5.849-15.365 5.848-21.214 0-5.862-5.863-5.863-15.351 0-21.213z" /><path d="m266.588 183.556c23.967-6.422 38.243-31.146 31.821-55.113-6.424-23.967-31.148-38.242-55.114-31.82-23.967 6.422-38.242 31.146-31.82 55.114 6.437 24.022 31.087 38.256 55.113 31.819zm-15.528-57.956c8.006-2.145 16.235 2.636 18.372 10.606 2.141 7.989-2.618 16.231-10.607 18.371-8.007 2.145-16.225-2.597-18.371-10.606-2.142-7.989 2.616-16.23 10.606-18.371z" /><path d="m273.591 383.559c6.414 23.932 31.112 38.251 55.115 31.819 23.967-6.422 38.241-31.146 31.819-55.113-6.437-24.019-31.082-38.258-55.114-31.82-23.967 6.422-38.242 31.146-31.82 55.114zm39.586-26.137c8.022-2.15 16.23 2.614 18.37 10.606 2.141 7.99-2.617 16.231-10.606 18.372-7.99 2.141-16.23-2.619-18.371-10.606-2.141-7.99 2.617-16.231 10.607-18.372z" /><path d="m358.444 275.412c-6.422 23.968 7.853 48.691 31.82 55.114 24.004 6.432 48.671-7.778 55.113-31.82 6.436-24.022-7.794-48.676-31.819-55.113-24.021-6.44-48.675 7.793-55.114 31.819zm57.955 15.529c-2.143 8.006-10.362 12.753-18.37 10.607-7.989-2.141-12.747-10.382-10.606-18.372 2.14-7.991 10.346-12.756 18.37-10.606 7.988 2.14 12.747 10.381 10.606 18.371z" /></g></svg></a> : null}
			{code ? <a target="_blank" rel="noreferrer" href={code}><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="94.504px" height="94.504px" viewBox="0 0 94.504 94.504" enableBackground="new 0 0 94.504 94.504" xmlSpace="preserve">
				<g>
					<g>
						<path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828    l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587    c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z" />
						<path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414    l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833    c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229    C33.542,66.771,33.542,65.505,32.759,64.724z" />
						<path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382    c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083    c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z" />
					</g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
			</svg></a> : null}
			{preview ? <a target="_blank" rel="noreferrer" href={preview}><svg height="511pt" viewBox="1 -75 511.9995 511" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.066406 171.917969c-42.816406-90.140625-140.175781-171.417969-254.066406-171.417969-128.148438 0-220.261719 100.246094-254.066406 171.417969-2.578125 5.429687-2.578125 11.734375 0 17.164062 42.816406 90.140625 140.175781 171.417969 254.066406 171.417969 128.148438 0 220.261719-100.25 254.066406-171.417969 2.578125-5.429687 2.578125-11.734375 0-17.164062zm-254.066406 148.582031c-92.140625 0-168.535156-60.722656-213.347656-140 44.625-78.953125 120.972656-140 213.347656-140 92.132812 0 168.535156 60.714844 213.347656 140-44.625 78.949219-120.972656 140-213.347656 140zm0-240c-55.140625 0-100 44.859375-100 100s44.859375 100 100 100 100-44.859375 100-100-44.859375-100-100-100zm0 160c-33.082031 0-60-26.917969-60-60 0-33.085938 26.917969-60 60-60 33.085938 0 60 26.914062 60 60 0 33.082031-26.914062 60-60 60zm0 0" /></svg></a> : null}
		</div>
	</div>);
}

const Showcase = () => {
	return (<div className="showcase">
		<Project
			design="https://www.figma.com/file/FNY4VFa7WkoQvKEb9vPFDb/Soundwave?node-id=0%3A1"
			preview="https://etshd1.github.io/Soundwave/"
			code="https://github.com/EtshD1/Soundwave"
			img={images.Site.Site1} />
		<Project
			preview="https://etshd1.github.io/Theme-Selector/"
			code="https://github.com/EtshD1/Theme-Selector"
			img={images.Site.Site2} />
		<Project
			design="https://www.figma.com/file/9iMU5gixyq9HcAnxiujGwp/25-5-Clock"
			code="https://github.com/EtshD1/25-plus-5-timer"
			preview="https://etshd1.github.io/25-plus-5-timer/"
			img={images.Site.Site3} />
		<a className="github-link" target="_blank" rel="noreferrer" href="https://github.com/EtshD1">
			<div>View more</div>
			<div>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="black" />
				</svg>
				<span>GitHub</span>
			</div>
		</a>
	</div>);
}

export default Showcase