import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import IconList from "../components/IconList";
import {
  textVariants,
  textLChildVariants,
  textRChildVariants,
	imageVariants,
} from "../animations/animations";

// TODO: MAKE MOBILE FRIENDLY
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function About() {
	const [showResume, setShowResume] = useState(false);
	const resumeRef = useRef(null);
	const mainBodyRef = useRef(null);
	const navbarRef = useRef(null);

	useEffect(() => {
		navbarRef.current = document.getElementById("navbar"); // Assuming the id name is 'navbar'
	}, []);

	function onDocumentLoadSuccess() {
		console.log("PDF Loaded")
	}

	const handleWheel = (event) => {
		if (event.deltaY > 0 && !showResume) {
			event.preventDefault();
			setShowResume(true);
			// Scroll down to show the resume
			setTimeout(() => {
				console.log("ref is " + resumeRef.current);
				if (resumeRef.current) {
					resumeRef.current.scrollIntoView({
						behavior: "smooth",
						block: "center",
					});
				}
			}, 10); // Delay to allow state change
		} else if (event.deltaY < 0 && showResume) {
			event.preventDefault();
			setShowResume(false);
			setTimeout(() => {
				console.log(navbarRef.current);
				if (mainBodyRef.current && navbarRef.current) {
					navbarRef.current.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}, 10);
		}
	};

	useEffect(() => {
		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => {
			window.removeEventListener("wheel", handleWheel);
		};
	}, [showResume]);

	return (
		<div ref={mainBodyRef}>
			<motion.div
				className="flex flex-col h-full items-center px-4 overflow-y-auto overscroll-none pb-16 pt-4"
				initial="hidden"
				animate="visible"
			>
				<motion.img
					className="aspect-square w-6/12 lg:w-1/5 object-cover rounded-full"
					src="https://i.imgur.com/SBJHoNX.jpg"
          alt="Profile Picutre"
          variants={imageVariants}
				/>
        <motion.h1
          className="text-secondary text-3xl md:text-5xl mt-4"
        variants={textVariants}>
					Fareen Khan
				</motion.h1>
				<br />
        <motion.div
          className="text-secondary text-base md:text-xl font-light w-full md:w-2/3 lg:w-1/2 text-left space-y-4"
        variants={textVariants}>
					<motion.p variants={textLChildVariants}>
						Hey! I'm Fareen, a third-year software engineering student at
						Toronto Metropolitan University.
					</motion.p>
					<motion.p variants={textRChildVariants}>
						I began coding in Python on a whim. I developed some simple
						algorithms and eventually created a web scraping bot on Discord.
						Since then, I've embarked on a journey to learn JavaScript, web
						development, and software development.
					</motion.p>
					<motion.p variants={textLChildVariants} className="flex">
						Check out some of my&nbsp;
						<Link
							className="flex cursor-pointer hover:scale-110 transition-all"
							to={"/projects"}
						>
							{" "}
							projects!😁
						</Link>
					</motion.p>
					<br />
					<motion.div variants={textRChildVariants} className="flex flex-col space-y-2 md:flex-row md:space-x-5">
						<p className="text-secondary">Languages</p>
						<IconList dest="language" />
					</motion.div>
					<motion.div variants={textLChildVariants} className="flex flex-col space-y-2 md:flex-row md:space-x-5">
						<p className="text-secondary">Technologies</p>
						<IconList dest="technologies" />
					</motion.div>
				</motion.div>

				<div className="text-secondary text-base md:text-xl font-light w-full md:w-2/3 lg:w-1/2 text-center space-y-4 mt-10 opacity-25 ">
					<p>Scroll down to see my resume</p>
					<FontAwesomeIcon
						icon={faChevronDown}
						className="text-secondary text-3xl animate-bounce hover:text-4xl transition-all"
						onClick={() => {
							setShowResume(true);
							resumeRef.current.scrollIntoView({
								behavior: "smooth",
								block: "center",
							});
						}}
					/>
				</div>
				<br />
				<div className="min-h-full py-4" ref={resumeRef}>
					<Link
						to={"https://flowcv.com/resume/wrkbdf251c"}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Document
							file={process.env.REACT_APP_RESUME_PDF}
							onLoadSuccess={onDocumentLoadSuccess}
							className="flex flex-col items-center"
						>
							<Page
								pageNumber={1}
								renderTextLayer={false}
								renderAnnotationLayer={false}
								customTextRenderer={false}
								canvasBackground="transparent"
								scale={1.1}
							/>
						</Document>
					</Link>
					<div className="text-secondary text-s md:text-md font-light w-full text-center opacity-50">
						<p>pssst... click on my resume to download it</p>
					</div>
					<FontAwesomeIcon
						icon={faChevronUp}
						className="text-secondary text-3xl animate-bounce pt-4 opacity-25 hover:text-4xl transition-all"
						onClick={() => {
							setShowResume(false);
							navbarRef.current.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}}
					/>
				</div>
			</motion.div>
		</div>
	);
}

export default About;
