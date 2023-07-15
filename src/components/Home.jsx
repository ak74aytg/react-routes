import React from 'react'
import vac from "../assets/2.webp";
import "../styles/Home.css";
import { AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

function Home() {
  return (
    <>
        <div className="head1" id='home'>
            <main>
                <h1>TECHYSTAR</h1>
                <p>SOLUTION TO ALL YOUR PROBLEMS</p>
            </main>
        </div>
        <div className="head2">
            <main>
                <img src={vac} alt="nice" />
                <p>We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.</p>
            </main>
        </div>
        <div className="head3" id='about'>
            <main>
                <h2>who are we?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia omnis itaque quasi deleniti pariatur doloremque laborum consequuntur corporis vel ad sunt nam id distinctio numquam dolore deserunt voluptatibus, iste corrupti fugit laboriosam exercitationem amet vitae. Ab non necessitatibus unde reiciendis neque iure ea laboriosam qui, ut voluptatibus commodi. Saepe quam assumenda esse sunt debitis beatae incidunt sapiente minus, laborum quos facilis qui delectus iste, aspernatur suscipit officia consectetur voluptates veniam. Maiores omnis dolor suscipit autem exercitationem ipsam expedita dolore cum fuga! Incidunt dolor maxime enim saepe tenetur, ratione velit et. Laborum necessitatibus deleniti explicabo nemo veniam, optio alias soluta sed officiis fuga cupiditate, consequuntur dolores adipisci ipsa omnis quis ipsam! Recusandae, repudiandae? Dicta rerum minima maiores dolores nesciunt perspiciatis dolorem deleniti, in tempora?</p>
            </main>
        </div>

        <div className="head4" id='brands'>
            <main>
                <h2>brands</h2>
                <article>
                    <div style={{animationDelay:'.3s'}}>
                        <AiFillGoogleCircle />
                        <p>google</p>
                    </div>
                    <div style={{animationDelay:'.6s'}}>
                        <AiFillYoutube />
                        <p>youtube</p>
                    </div>
                    <div style={{animationDelay:'.9s'}}>
                        <AiFillInstagram />
                        <p>instagram</p>
                    </div>
                    <div style={{animationDelay:'1.2s'}}>
                        <AiFillGithub />
                        <p>github</p>
                    </div>
                </article>
            </main>
        </div>
    </>
  )
}

export default Home