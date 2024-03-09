import React from 'react'
import './App.css';

function App() {
  return (
    <div>
        <h1 className='head'>Accordin</h1>
        <div>
        <section class="accordion" id="overview">
		<h1 class="title"><a href="#overview">Introduction</a></h1>
		<div class="content">
			<div class="wrapper">
				<p>Your introduction in an interview should be succinct 
                    and last around 1 to 2 minutes. Provide your name, 
                    educational background, relevant work experience, 
                    key skills, and strengths. Convey your career
                     objective and express gratitude for the opportunity.</p>
			</div>
		</div>
	</section>

	<section class="accordion" id="how-does-it-work">
		<h1 class="title"><a href="#how-does-it-work">My Self</a></h1>
		<div class="content">
			<div class="wrapper">
				<p>Introduce yourself with your full name as it appears on your certificates.
                     You can share some background information about where you were born and raised.
                     For instance, you can say, “I am Himadhar Mahajan, and I come from Mumbai. 
                    I was born in Bangalore but went to schools across the country as my dad is in the army.</p>
                    <p>Although your academic details appear on the resume,
                         interviewers may like you to walk them through it. So, 
                         without stretching it out much, mention the main aspects, 
                         such as where you went to college and your final results. Besides, if there is 
                         something impressive,
                          like a 98% percentile in Mathematics, make sure to bring it to their notice.
                         What to remember? If your job duties align with your post-degree 
                         certifications but are different from your major, you may be required to explain. 
                         Expect a question framed “why do we hire you?” or “why do you think you are the 
                         right choice for the job?”</p>
			</div>
		</div>
	</section>

	<section class="accordion" id="inspiration">
		<h1 class="title"><a href="#inspiration">Future Plan</a></h1>
		<div class="content">
			<div class="wrapper">
				<p>If you are just beginning your career or have years
                     of experience, it is important to reassure the recruiter that you are 
                     looking at the long-term. Talk about your career ambitions and the goals 
                     you wish to achieve in the next five years. Here, you can talk about what drives
                      you and from where you get the needed motivation.
                      What to remember? Frame the sentences so that the interviewer can put together how your plans 
                     can help you in this particular role.</p>
			</div>
		</div>
	</section>

        </div>
    </div>
  )
}

export default App