module.exports = `<!DOCTYPE html>
<html>
<head>
<title>Brian Wu - Curriculum Vitae</title>

<meta name="viewport" content="width=device-width"/>
<meta name="description" content="The Curriculum Vitae of Brian Wu."/>
<meta charset="UTF-8"> 

<link type="text/css" rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body id="top">
<CVWrapper>
<div id="cv" class="instaFade">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
			<img src="./statics/headshot.jpg" alt="Brian Wu" />
		</div>
		
		<div id="name">
			<h1 class="quickFade delayTwo">Brian (Shao-You) Wu</h1>
			<h2 class="quickFade delayThree">Software Engineer</h2>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
		<a href="./statics/cv/CV_Brian_Wu.pdf" target="_blank" rel="noreferrer noopener">
		<button class="btn"><i class="fa fa-download"></i> Download CV</button></a>

			<ul>
				
				<li><i class="fa fa-envelope" style="font-size:10px;margin:1px;"></i><a href="mailto:brian.sy.wu@gmail.com" target="_blank"> brian.sy.wu@gmail.com</a></li>
				<li><i class="fa fa-home" style="font-size:15px;margin:1px;"></i><a href="http://brianwu.tw"> brianwu.tw</a></li>
				<li><i class="fa fa-mobile" style="font-size:17px;margin:1px;"></i> +44-07516549952</li>
				<li><i class="fa fa-map-marker" style="font-size:15px;margin:1px;"></i> Manchester, United Kingdom<li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Summary</h1>
				</div>
				
				<div class="sectionContent">
					<p style="text-align: justify;">Experienced software engineer, especially in 4G/5G, had experience in system design, implementation, optimisation, academic research, paper publication and mentoring. 
						Familiar with the architecture of Software-Defined Network, Radio Access Network, and Wireless Sensor Network. 
						Originally from Taiwan and living in Manchester, granted a dependent-partner visa eligible to work full-time and will not require sponsorship until 30/4/2026. 
						A quick learner with learning passion and willingness, and constantly (learning: React, JavaScript, Machine Learning). 
						Satisfied with delivering high-quality work output through innovative approaches and teamwork, looking forward to contributing the strengths.</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Work Experience</h1>
			</div>

			<div class="clear"></div>
			<img src="./statics/PRIMARY-MASTER-LOGO_EN_CMYK_ORANGE.png" alt="Mediatek" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2 style="margin:0;">4G/5G Software Engineer</h2>
					<p class="subDetails">MediaTek Inc. (Wireless Communication Technology Department) - Hsinchu, Taiwan | 12/2015 - 10/2021</p>

					<ul>
						<li>MediaTek is a global fabless firm, ranked the seventh largest semiconductor supplier and biggest smartphone chipset vendor in the world in 2021.</li>
						<li>Developed/maintained/optimised 4G/5G Layer-2 protocol software of system-on-a-chip (SoC), grasped 3gpp specifications, and fixed issues.</li>
						<li>Cooperated with foreign colleagues, jointly debugged with telecom operators and machine vendors, and also handled issues from the customer.</li> 
						<li>Optimised uplink data scheduling (run in an embedded system) and decreased its hard-real-time (HRT) by 20% via increasing cache efficiency and empowering parallel processing.</li> 
						<li>Designed and implemented a big-data analysis system, which can extract valuable information (shown on Splunk) from huge field-trial logs, such as network configuration patterns and user behaviour. Optimised some product features effectively with more confidence based on this system.</li> 
						<li>Boosted maximum throughput of a single phone, and reached 5G theoretical values on Oct. 2021 for both mmWave and Sub-6 spectrums, which is the world first.</li> 
						<li>Troubleshot performance issues by simultaneously considering telecom stack (LTE-A/NR) and datacom stack (TCP/IP). </li>
					</ul>

				</article>
			</div>
			
			<div class="clear"></div>
			<img src="./statics/NHRI_Logo.gif" alt="nhri" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2 style="margin:0;">Research Assistant (During study time)</h2>
					<p class="subDetails">National Health Research Institutes - Miaoli, Taiwan | 08/2013 - 12/2014</p>
					<ul>
						<li>Implemented a parallel program to process and transform huge genetic raw data on supercomputers for further analysis.</ul>
					</ul>
				</article>
			</div>

			<div class="clear"></div>
			<img src="./statics/Academia_Sinica.png" alt="academia sinica" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2 style="margin:0;">Research Assistant (During study time)</h2>
					<p class="subDetails">Academia Sinica - Taipei, Taiwan | 08/2012 - 12/2014</p>
					<ul>
						<li>Studied Wireless Sensor Network (WSN) and developed some innovative approaches conducted in the heuristic algorithm to solve sensor clustering and routing problems in WSN.</li>
						<li>Published the results in IEEE papers and presented them at the conferences.</li> 
					</ul>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Skills</h1>
			</div>
			
			<div class="sectionContent">
				<ul>
					<li>C/C++, Python, Java, Verilog</li>
					<li>Git, CI/CD, Splunk, Heuristic Algorithms, Embedded System</li>
					<li>4G/5G, TCP/IP, Radio Access Network (RAN), Software-Defined Network (SDN), Wireless Sensor Network (WSN)</li>
				</ul>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Education</h1>
			</div>
			
			<div class="clear"></div>
			<img src="./statics/NCTU_emblem.svg.png" alt="nctu" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2 style="margin:0;">M.Sc. in Network Engineering</h2>
					<p class="subDetails">National Chiao Tung University - Hsinchu, Taiwan | 09/2013 - 09/2015</p>
					<ul>
						<li>GPA: 4.17/4.3</li>
						<li>Studied Software-Defined Network (SDN) and developed an SDN management system as a realistic application demo.</li>
						<li>Thesis: “Network-path-aware Traffic Monitoring and Use Cases for OpenFlow-based SDN”
							<ul>
								<li>Proposed a novel way to flexibly monitor SDN traffic by installing commands into network devices.</li>
								<li>Published in “PathMon: Path-specific traffic monitoring in OpenFlow-enabled networks,” 2016 ICUFN.</li>
							</ul>
						</li>
					</ul>
				</article>
			</div>	

			<div class="clear"></div>
			<img src="./statics/1200px-Tsinghua_University_Logo.svg.png" alt="thu" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2>Exchange Student in Computer Science and Technology</h2>
					<p class="subDetails">Tsinghua University - Beijing, China | 02/2013 - 06/2013</p>
				</article>
			</div>	

			<div class="clear"></div>
			<img src="./statics/NCTU_emblem.svg.png" alt="nctu" style="width: 11%;float:left;margin: 2% 0 0 10%;"/>
			<div class="sectionContent">
				<article>
					<h2>B.Sc. in Computer Science</h2>
					<p class="subDetails">National Chiao Tung University - Hsinchu, Taiwan | 09/2009 - 06/2013</p>
					<h1>* National Chiao Tung University (NCTU) and National Yang-Ming University (NYMU) merged into National Yang Ming Chiao Tung University (NYCU) on Feb. 1, 2021.</h1>
				</article>
			</div>
			<div class="clear"></div>
		</section>

		<section>
			<div class="sectionTitle">
				<h1>Publication</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<ol>
						<li>Ming-Hung Wang, Shao-You Wu, Li-Hsing Yen and Chien-Chao Tseng, 
						<a href="https://ieeexplore.ieee.org/document/7537143" target="_blank" rel="noreferrer noopener" style="color:blue;">
						"PathMon: Path-specific traffic monitoring in OpenFlow-enabled networks,"
						</a> 2016 Eighth International Conference on Ubiquitous and Future Networks (ICUFN), 2016, pp. 775-780, doi: 10.1109/ICUFN.2016.7537143.</li>
						
						<li>S. Wu and J. Liu, 
						<a href="https://ieeexplore.ieee.org/document/6900511" target="_blank" rel="noreferrer noopener" style="color:blue;">
						"Evolutionary path planning of a data mule in wireless sensor network by using shortcuts,"
						</a> 2014 IEEE Congress on Evolutionary Computation (CEC), 2014, pp. 2708-2715, doi: 10.1109/CEC.2014.6900511.</li>
						
						<li>J. Liu, S. Wu and K. Chiu, 
						<a href="https://ieeexplore.ieee.org/document/6611660" target="_blank" rel="noreferrer noopener" style="color:blue;">
						"Path planning of a data mule in wireless sensor network using an improved implementation of clustering-based genetic algorithm,"
						</a> 2013 IEEE Symposium on Computational Intelligence in Control and Automation (CICA), 2013, pp. 30-37, doi: 10.1109/CICA.2013.6611660.</li>
					</ol>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		<section>
			<div class="sectionTitle">
				<h1>Languages</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<p>Mandarin (native), English (upper-intermediate)</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>

		<section>
			<div class="sectionTitle">
				<h1>Interests</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<p>Cooking, Tennis, Music</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
	</div>
</div>
</CVWrapper>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3753241-1");
pageTracker._initData();
pageTracker._trackPageview();
</script>
</body>
</html>`