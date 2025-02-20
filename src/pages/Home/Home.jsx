import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/hero-img.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import work1 from "../../assets/work1.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<section className="hero">
				<div>
					<h1>Hi, I'm Peter</h1>
					<p>
						A Sydney based front-end developer passionate about
						building accessible and user friendly websites.
					</p>
					<aside>
						<button>Contact Me</button>
						<div className="icons">
							<FaLinkedinIn />
						</div>
						<div className="icons">
							<FaGithub />
						</div>
					</aside>
				</div>

				<img src={heroImg} alt="" />
			</section>

			<section className="featured-projects">
				<h2>Featured Projects</h2>
				<p>
					Here are some of the selected projects that showcase my
					passion for front-end development.
				</p>

				<article className="project">
					<div>
						<button>Conceptual Work</button>
						<img src={work1} alt="" />
					</div>

					<aside>
						<h3>Promotional landing page for our favorite show</h3>
						<p>
							Teamed up with a designer to breathe life into a
							promotional webpage for our beloved show, Adventure
							Time. Delivered a fully responsive design with
							dynamic content capabilities, seamlessly integrating
							a newsletter feature to keep fans updated with the
							latest adventures.
						</p>

						<h5>PROJECT INFO</h5>
						<span>
							<p>Year</p>
							<p>2025</p>
						</span>
						<span>
							<p>Role</p>
							<p>Frontend Developer</p>
						</span>

						<div className="links">
							<Link to="#">
								<p>Live Demo</p>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_7_108)">
										<path
											d="M5.9897 19.2176L16.3036 8.90369V16.3891L18.3033 16.3891L18.3033 5.48978L7.40391 5.48978L7.40391 7.48948L14.8893 7.48948L4.57549 17.8033L5.9897 19.2176Z"
											fill="#D3E97A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_7_108">
											<rect
												width="24"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
								<div className="line"></div>
							</Link>
							<Link to="#">
								<p>See on github</p>
								<FaGithub />
								<div className="line"></div>
							</Link>
						</div>
					</aside>
				</article>
			</section>
		</div>
	);
};

export default Home;
