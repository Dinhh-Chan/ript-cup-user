import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, MapPin, Award, Shield, FileText, AlertCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Về giải đấu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Thông tin chi tiết về RIPT Football Cup 2025 và thể lệ thi đấu
        </p>
      </div>

      {/* Tournament Overview */}
      <Card className="mb-8 border-2 border-primary">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            RIPT Football Cup 2025
          </CardTitle>
          <CardDescription className="text-base">Giải bóng đá sinh viên và giảng viên PTIT</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base leading-relaxed">
            RIPT Football Cup là giải bóng đá thường niên được tổ chức bởi Viện Khoa học Kỹ thuật Bưu Điện (RIPT) nhằm
            tạo sân chơi lành mạnh, thúc đẩy tinh thần thể thao và gắn kết cộng đồng sinh viên, giảng viên tại Học viện
            Công nghệ Bưu chính Viễn thông.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Thời gian</h4>
                <p className="text-sm text-muted-foreground">15/03/2025 - 26/03/2025</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Địa điểm</h4>
                <p className="text-sm text-muted-foreground">Sân bóng PTIT, Hà Nội</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Số đội tham gia</h4>
                <p className="text-sm text-muted-foreground">20 đội (14 lớp + 4 giảng viên + 2 khách mời)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Giải thưởng</h4>
                <p className="text-sm text-muted-foreground">Cúp vô địch + 15 triệu VNĐ</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tournament Format */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Shield className="h-6 w-6" />
            Thể thức thi đấu
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Badge variant="outline">Vòng 1</Badge>
              Vòng bảng
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>20 đội chia thành 5 bảng (A, B, C, D, E), mỗi bảng 4 đội</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Thi đấu vòng tròn 1 lượt trong bảng (mỗi đội đấu 3 trận)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>2 đội dẫn đầu mỗi bảng vào vòng loại trực tiếp (tổng 10 đội)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Xếp hạng theo: Điểm số → Hiệu số bàn thắng → Bàn thắng ghi được → Đối đầu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Badge variant="outline">Vòng 2</Badge>
              Vòng loại trực tiếp
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Tứ kết: Nhất bảng gặp Nhì bảng (4 trận)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Bán kết: 4 đội thắng tứ kết (2 trận)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Tranh hạng 3: 2 đội thua bán kết</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Chung kết: 2 đội thắng bán kết</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <span>Nếu hòa: Đá luân lưu 11m (không có hiệp phụ)</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Rules and Regulations */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <FileText className="h-6 w-6" />
            Thể lệ và quy định
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">1. Quy định về đội bóng</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Mỗi đội có tối thiểu 11 cầu thủ và tối đa 18 cầu thủ</p>
                <p>• Mỗi trận đấu ra sân 7 cầu thủ chính + tối đa 5 cầu thủ dự bị</p>
                <p>• Cầu thủ phải là sinh viên/giảng viên PTIT hoặc được ban tổ chức chấp thuận</p>
                <p>• Mỗi cầu thủ chỉ được đăng ký cho 1 đội duy nhất</p>
                <p>• Đội trưởng chịu trách nhiệm về kỷ luật và liên lạc với ban tổ chức</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">2. Quy định thi đấu</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Thời gian: 2 hiệp x 25 phút, nghỉ giữa hiệp 5 phút</p>
                <p>• Sân bóng: Sân 7 người theo tiêu chuẩn FIFA</p>
                <p>• Bóng: Size 5 theo tiêu chuẩn</p>
                <p>• Thay người: Không giới hạn số lần thay người</p>
                <p>• Luật việt vị: Áp dụng theo luật bóng đá 7 người</p>
                <p>• Trọng tài: 1 trọng tài chính + 2 trọng tài biên</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">3. Kỷ luật</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Thẻ vàng: Cảnh cáo, 2 thẻ vàng = 1 thẻ đỏ</p>
                <p>• Thẻ đỏ: Truất quyền thi đấu ngay lập tức + bị treo giò 1 trận tiếp theo</p>
                <p>• Hành vi bạo lực: Truất quyền thi đấu toàn giải + xử lý kỷ luật</p>
                <p>• Cầu thủ không đủ điều kiện: Đội bị thua 0-3 và phạt tiền</p>
                <p>• Khiếu nại: Phải gửi văn bản trong vòng 24h sau trận đấu</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">4. Trang phục và thiết bị</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Áo đấu: Thống nhất màu sắc, có số áo rõ ràng (1-99)</p>
                <p>• Quần áo: Không được mặc trang phục có hình ảnh/chữ viết không phù hợp</p>
                <p>• Giày: Giày bóng đá có đinh (không được dùng giày đinh sắt)</p>
                <p>• Bảo hộ: Khuyến khích đeo bảo hộ ống đồng</p>
                <p>• Trang sức: Không được đeo trang sức khi thi đấu</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">5. Giải thưởng</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Vô địch: Cúp vô địch + 15.000.000 VNĐ + huy chương vàng</p>
                <p>• Á quân: Cúp á quân + 10.000.000 VNĐ + huy chương bạc</p>
                <p>• Hạng 3: Cúp hạng 3 + 5.000.000 VNĐ + huy chương đồng</p>
                <p>• Vua phá lưới: Cúp + 2.000.000 VNĐ</p>
                <p>• Thủ môn xuất sắc: Cúp + 2.000.000 VNĐ</p>
                <p>• Cầu thủ xuất sắc: Cúp + 3.000.000 VNĐ</p>
                <p>• Fair Play: Cúp + 1.000.000 VNĐ</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Important Notes */}
      {/* <Card className="border-2 border-orange-500">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <AlertCircle className="h-6 w-6" />
            Lưu ý quan trọng
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
            <p>
              <strong>Đăng ký:</strong> Hạn chót đăng ký là 23:59 ngày 10/03/2025. Không nhận đăng ký muộn.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
            <p>
              <strong>Lệ phí:</strong> 500.000 VNĐ/đội, thanh toán trước ngày 12/03/2025. Bao gồm áo đấu và bóng thi
              đấu.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
            <p>
              <strong>Bảo hiểm:</strong> Mỗi cầu thủ phải có bảo hiểm y tế. Ban tổ chức không chịu trách nhiệm về chấn
              thương.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
            <p>
              <strong>Thời tiết:</strong> Trận đấu vẫn diễn ra trong mưa nhẹ. Hoãn nếu có mưa to hoặc thời tiết nguy
              hiểm.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500 mt-2" />
            <p>
              <strong>Quyết định cuối cùng:</strong> Ban tổ chức có quyền quyết định cuối cùng về mọi vấn đề phát sinh.
            </p>
          </div>
        </CardContent>
      </Card> */}

      {/* Contact */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Liên hệ</CardTitle>
          <CardDescription>Thông tin liên hệ ban tổ chức</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Ban tổ chức:</strong> Viện Khoa học Kỹ thuật Bưu Điện (RIPT)
          </p>
          <p>
            <strong>Email:</strong> riptfootballcup@ptit.edu.vn
          </p>
          <p>
            <strong>Hotline:</strong> 024 1234 5678 (8:00 - 17:00, Thứ 2 - Thứ 6)
          </p>
          <p>
            <strong>Địa chỉ:</strong> Viện Khoa học Kỹ thuật Bưu Điện, Học viện Công nghệ Bưu chính Viễn thông, Km 10
            Đường Nguyễn Trãi, Hà Đông, Hà Nội
          </p>
          <p>
            <strong>Website:</strong> riptfootballcup.ptit.edu.vn
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
