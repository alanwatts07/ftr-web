import React from 'react';
import mc2Portrait from '../assets/mc2-portrait.jpg';

const FeaturedArtist = () => {
    return (
        <section className="featured-artist-section">
            <h2 className="section-title">FEATURED TRANSMISSION</h2>
            <div className="artist-card mc2-card">
                <div className="artist-image-container">
                    <img src={mc2Portrait} alt="MC² Portrait" className="artist-image" />
                    <div className="artist-overlay">
                        {/* Overlay content removed per request */}
                    </div>
                </div>
                <div className="artist-info">
                    <h3 className="artist-name">MC²</h3>
                    <div className="artist-bio">
                        <p>MC² (MC-Squared) is a lyrical architect of the shadows, blending the grit of industrial boom-bap with the icy serenity of a noir spy thriller. Born from memories of battling "terrible wizards" through the frozen tunnels of Minnesota, his sound is as cold as a Siberian wind and as precise as a bypassed firewall.</p>
                        <br />
                        <p>A technical storyteller, MC² moves with a "relaxed but lethal" grace. His tracks—ranging from the high-stakes infiltration of "Subvert" to the sharp, satirical bite of "Ice? ICE Baby."—explore themes of government negligence, systemic failure, and the pursuit of "the big dirty"—that one final move to get off the streets for good.</p>
                        <br />
                        <p>Whether he’s draped in a heavy overcoat approaching a frozen Russian hideout or navigating the technical chaos of an armed-to-the-teeth bureaucracy, MC² delivers a staccato flow that is impossible to trace and even harder to ignore. In a world of hollow suits and lazy training, MC² is ghost who refuses to submit—he only subverts.</p>
                        <br />
                        <p><em>"The system doesn't just crash. It's rewritten."</em></p>
                    </div>
                    <div className="artist-actions">
                        <button className="listen-btn secondary">PROFILE DATA</button>
                    </div>
                    <div className="spotify-embed-container" style={{ marginTop: '2rem', width: '100%' }}>
                        <iframe
                            data-testid="embed-iframe"
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/album/4dbj1aQzTCJHHaXFBbZpJe?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArtist;
