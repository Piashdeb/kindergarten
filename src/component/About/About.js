import React from 'react';

const About = () => {
    return (
        <div className="container p-5">
            <div className="bg-info">
                <h1>Learning Envirenment :</h1>
                <p>The classrooms are furnished  and equipped with developmentally appropriate learning tools, toys and materials that invite inquiry and open interaction. Pictures, signs and other written references convey the ideas of language, communication and foster early reading. Students experience and express themselves as individuals and learn to interact and function effectively as part of a group through classroom tasks and responsibilities for themselves and others. A calendar and a weather chart integrate the students into their broader environment while a clear daily schedule helps them orientate themselves relative to time.</p>
            </div>
            <div>
                <h2>Visit Us</h2>
                <p>You are invited to arrange for your child to visit us and to talk with the teachers, the coordinator as well as the principal.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.16604573867!2d91.82596231128802!3d24.89975946291354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1633338580496!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div>
                <h2>Contract </h2>
                <p><div>
                    Principal of the Elementary School:
                    <br />
                    Michael Schilling <br />
                    mschilling@giswashington.org <br />
                </div>

                    <div>
                        Director of Enrollment Management: <br /> Jeannette Dubrey <br />
                        admissions@giswashington.org <br />
                    </div>
                    <div>
                        We look forward to meeting your child and your family! Please share your information with us through our inquiry form.
                    </div>
                </p>
            </div>

        </div>
    );
};

export default About;