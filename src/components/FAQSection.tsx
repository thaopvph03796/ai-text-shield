import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "AI Content Detector có miễn phí không?",
    answer: "Có, AI Content Detector cung cấp gói miễn phí với hạn mức 5000 từ mỗi lần kiểm tra. Bạn có thể nâng cấp lên gói Pro để có giới hạn cao hơn và các tính năng nâng cao."
  },
  {
    question: "AI Content Detector hoạt động như thế nào?",
    answer: "AI Content Detector sử dụng kết hợp nhiều AI detector hàng đầu như ZeroGPT, Undetectable.ai, Grammarly và nhiều công cụ khác để phân tích văn bản. Kết quả tổng hợp từ các detector này sẽ cho bạn đánh giá chính xác nhất về khả năng nội dung được tạo bởi AI."
  },
  {
    question: "Văn bản của tôi có được lưu trữ không?",
    answer: "Không, chúng tôi cam kết bảo mật tuyệt đối. Văn bản của bạn chỉ được xử lý trong quá trình kiểm tra và không được lưu trữ trên hệ thống của chúng tôi."
  },
  {
    question: "AI Content Detector có hỗ trợ tiếng Việt không?",
    answer: "Có, AI Content Detector hỗ trợ kiểm tra nội dung tiếng Việt cũng như nhiều ngôn ngữ khác. Các AI detector của chúng tôi được tối ưu hóa để hoạt động tốt với nhiều ngôn ngữ khác nhau."
  },
  {
    question: "Độ chính xác của AI Content Detector là bao nhiêu?",
    answer: "AI Content Detector sử dụng 8+ AI detectors hàng đầu để đảm bảo độ chính xác cao nhất. Tuy nhiên, không có công cụ nào có thể chính xác 100%, vì vậy kết quả nên được xem là tham khảo."
  },
  {
    question: "Tôi có thể kiểm tra tài liệu Word hoặc PDF không?",
    answer: "Có, bạn có thể upload trực tiếp các file Word (.doc, .docx) và PDF. Hệ thống sẽ tự động trích xuất nội dung và thực hiện kiểm tra."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tìm câu trả lời cho các câu hỏi phổ biến về AI Content Detector
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
