import React from "react";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('Testimonials');
    }

    componentWillUnmount() {
        document.body.classList.remove('Testimonials');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {
        return (
            <section className="page__section testimonial__group">
                <h2>Отзывы</h2>

                <div className="testimonial__element">
                    <blockquote>
                        Нам очень понравилась экскурсия с Людмилой по Гаване.
                        Было очень приятно узнать так много малоизвестных фактов о столице Кубы.
                        Человек большой эрудиции, она открыла нам глаза на очень многое
                        в истории и культуре города и всей страны в целом.
                    </blockquote>
                    <div className="testimonial__author">
                        <div className="testimonial__author_photo">
                            Х
                        </div>
                        <div className="testimonial__author_name">
                            Игорь и Женика Ентальцевы (Сочи)
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Testimonials;