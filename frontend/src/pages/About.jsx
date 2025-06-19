import { Link } from "react-router-dom";
import { GiSupersonicBullet } from "react-icons/gi";

import travel from "../assets/travel.jpg";

const About = () => {
  return (
    <section>
      <div className="container-md py-4">
        <div className="about-topic">
          <h2 className="about text-info h2 fw-bold mb-2">
            {" "}
            About Danakil Tour
          </h2>
          <div className="about-head container-fluid row py-5 mb-3 mx-0 align-items-center">
            <div className="container-fluid text-secondary col-12 col-md-6">
              <p className="d-flex text-start card-text">
                 TOUR là nhà cung cấp hàng đầu các giải pháp quản lý du lịch 
                 dành cho ngành du lịch và lữ hành. Chúng tôi cung cấp các 
                 dịch vụ toàn diện nhằm giúp các doanh nghiệp tối đa hóa tiềm năng 
                 và gia tăng lợi nhuận. Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi 
                 luôn tận tâm mang đến dịch vụ và hỗ trợ chất lượng cao nhất cho khách hàng.
              </p>
              <p className="d-flex text-start">
                Chúng tôi hiểu rõ tầm quan trọng của quản lý du lịch 
                và ảnh hưởng của nó đến sự thành công của một doanh nghiệp. 
                Chúng tôi luôn nỗ lực cung cấp cho khách hàng những giải pháp tốt nhất 
                để giúp họ đạt được mục tiêu. Đội ngũ chuyên gia của chúng tôi 
                cam kết mang đến dịch vụ và hỗ trợ chất lượng cao nhất. Chúng tôi 
                luôn tận tâm hỗ trợ khách hàng tối đa hóa tiềm năng và gia tăng lợi nhuận.
              </p>
              <p className="d-flex text-start">
                Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi cam kết cung cấp dịch vụ 
                và hỗ trợ chất lượng cao nhất cho khách hàng. Chúng tôi luôn tận tâm 
                giúp khách hàng tối đa hóa tiềm năng và gia tăng lợi nhuận. Đội ngũ chuyên gia 
                của chúng tôi luôn cam kết mang đến dịch vụ và hỗ trợ tốt nhất, nhằm giúp khách hàng 
                đạt được hiệu quả cao nhất trong hoạt động kinh doanh.
              </p>
            </div>
            <div className="container-fluid col-10 col-md-6">
              <img
                src="https://media.gettyimages.com/id/1019053440/video/ethiopia-with-national-flag.jpg?s=640x640&k=20&c=DwzLZawpRPqDssmGQV4egzyFBr-nxxjM-8LuLA9BUG4="
                className="container-fluid img-thumbnail"
                alt="ethiopia on a map"
              />
            </div>
          </div>
        </div>
        <p className="text-info h5 my-5">
           TOUR giúp bạn đưa ra quyết định đúng đắn.
          <Link to="/package" className="text-danger text-decoration-none">
            {" "}
            `Đi đâu? / Nên đi đâu?`{" "}
          </Link>
        </p>

        <div className="rating container-fluid row border py-3 my-4 mx-0">
          <img
            src={travel}
            alt="ethiopia on a map"
            className="col-12 col-md-5 my-0"
          />
          <div
            className="col-12 col-md-7 accordion accordion-flush text-start align-self-center my-7"
            id="accordionFlushExample"
          >
            <p className="mb-3 ">
              Chúng tôi cung cấp nhiều dịch vụ đa dạng nhằm hỗ trợ khách hàng.
              Các dịch vụ của chúng tôi bao gồm:
            </p>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Lập kế hoạch và phát triển du lịch:
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    Chúng tôi cung cấp các dịch vụ lập kế hoạch và phát triển toàn diện 
                    nhằm giúp khách hàng xây dựng và triển khai các chiến lược du lịch hiệu quả.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Tiếp thị và quảng bá du lịch:{" "}
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    Chúng tôi cung cấp các dịch vụ tiếp thị và quảng bá toàn diện 
                    nhằm giúp khách hàng tiếp cận đúng đối tượng mục tiêu 
                    và nâng cao mức độ nhận diện thương hiệu.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Quản lý và vận hành du lịch:{" "}
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet />
                    Chúng tôi cung cấp các dịch vụ nghiên cứu và phân tích toàn diện 
                    nhằm giúp khách hàng hiểu rõ thị trường của mình 
                    và xây dựng các chiến lược hiệu quả.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Nghiên cứu và phân tích du lịch:
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    <GiSupersonicBullet /> Chúng tôi cung cấp các dịch vụ quản lý và vận hành toàn diện 
                    nhằm hỗ trợ khách hàng quản lý hiệu quả các hoạt động du lịch của mình.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group container-fluid row my-5 align-items-center">
          <div className="contaienr-fluid col-10 col-md-5">
            <img
              src="https://www.worqambatour.com/img/carousel/DEBRE-LIBANOS-7%20DAYS-NORTH-ETHIOPIA-TOUR.jpg"
              className="container-fluid"
              alt="Timket holiday in Gondar"
            />
          </div>
          <div className="contaienr-fluid col-10 col-md-7 text-start">
            <p>
              Tại TOUR, chúng tôi cam kết mang đến cho khách hàng những 
              giải pháp tốt nhất để giúp họ đạt được mục tiêu. Đội ngũ chuyên gia 
              giàu kinh nghiệm của chúng tôi luôn tận tâm cung cấp dịch vụ và 
              hỗ trợ chất lượng cao nhất. Chúng tôi không ngừng nỗ lực 
              nhằm mang đến cho khách hàng những giải pháp tối ưu nhất, giúp họ 
              phát huy tối đa tiềm năng và gia tăng lợi nhuận.
            </p>
            <p>
              Chúng tôi tự hào là đơn vị dẫn đầu trong ngành quản lý du lịch và 
              cam kết mang đến cho khách hàng những giải pháp tốt nhất 
              để giúp họ đạt được mục tiêu. Chúng tôi luôn tận tâm 
              hỗ trợ khách hàng tối đa hóa tiềm năng và gia tăng lợi nhuận. Chúng tôi 
              không ngừng nỗ lực để cung cấp các giải pháp tối ưu, giúp khách hàng 
              phát triển hiệu quả và bền vững.
            </p>
          </div>
        </div>
        {/* <div className="andMore h2 text-body fw-normal my-4 ">And More ....   <Link to="/register" className='btn btn-warning  btn-block'>Get started</Link></div> */}
      </div>
    </section>
  );
};

export default About;
