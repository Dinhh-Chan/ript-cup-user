import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Award, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/football-field-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth">
                Coming Soon
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance slide-up">
                RIPT FOOTBALL CUP
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed slide-up stagger-1">
                Giải bóng đá RIPT CUP - Viện Khoa học Kỹ thuật Bưu điện
              </p>
              <div className="flex flex-wrap gap-4 slide-up stagger-2">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="hover:scale-105 transition-smooth hover:shadow-lg"
                >
                  <Link href="/register">Đăng ký ngay</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-smooth"
                  asChild
                >
                  <Link href="/about">Tìm hiểu thêm</Link>
                </Button>
              </div>
            </div>
            <div className="relative scale-in">
              <Image
                src="/Teaser giải bóng đá udu cup.png"
                alt="RIPT Football Cup Poster"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl hover:scale-105 transition-smooth-slow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Thông tin giải đấu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sân chơi thể thao lành mạnh, nâng cao tinh thần đoàn kết và giao lưu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-smooth hover-lift slide-up stagger-1">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4 transition-smooth group-hover:scale-110" />
                <CardTitle>20 Đội tham gia</CardTitle>
                <CardDescription>Các lớp UDU + AiOT, giảng viên và đội khách mời</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary transition-smooth hover-lift slide-up stagger-2">
              <CardHeader>
                <Trophy className="h-12 w-12 text-secondary mb-4 transition-smooth group-hover:scale-110" />
                <CardTitle>Thể thức 7 người</CardTitle>
                <CardDescription>Mỗi đội tối đa 15 cầu thủ (7 chính + 8 dự bị)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent transition-smooth hover-lift slide-up stagger-3">
              <CardHeader>
                <Clock className="h-12 w-12 text-accent mb-4 transition-smooth group-hover:scale-110" />
                <CardTitle>2 hiệp x 20 phút</CardTitle>
                <CardDescription>Nghỉ giữa hiệp 5 phút, thay người tự do</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Mục đích - Ý nghĩa</h2>
              <div className="space-y-6">
                <div className="flex gap-4 slide-up stagger-1 hover:translate-x-2 transition-smooth">
                  <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sân chơi lành mạnh</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tạo sân chơi thể thao lành mạnh, nâng cao tinh thần đoàn kết, giao lưu giữa các lớp
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 slide-up stagger-2 hover:translate-x-2 transition-smooth">
                  <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Rèn luyện sức khỏe</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rèn luyện sức khỏe, nâng cao tinh thần thể thao cho sinh viên và giảng viên
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 slide-up stagger-3 hover:translate-x-2 transition-smooth">
                  <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Gắn kết cộng đồng</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tăng cường sự gắn kết giữa sinh viên, giảng viên và cộng đồng Viện KHKT Bưu Điện
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden scale-in hover:scale-105 transition-smooth-slow">
              <Image src="/Screenshot 2025-10-04 190833.png" alt="Football team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Giải thưởng</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vinh danh những cá nhân và tập thể xuất sắc nhất giải đấu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-yellow-500 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 hover-lift scale-in stagger-1">
              <CardHeader>
                <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4 hover:rotate-12 transition-smooth" />
                <CardTitle className="text-2xl">Vô địch</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 hover-lift scale-in stagger-2">
              <CardHeader>
                <Trophy className="h-16 w-16 text-gray-500 mx-auto mb-4 hover:rotate-12 transition-smooth" />
                <CardTitle className="text-2xl">Á quân</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 hover-lift scale-in stagger-3">
              <CardHeader>
                <Trophy className="h-16 w-16 text-orange-700 mx-auto mb-4 hover:rotate-12 transition-smooth" />
                <CardTitle className="text-2xl">Hạng ba</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-smooth hover-lift scale-in stagger-4">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4 hover:scale-110 transition-smooth" />
                <CardTitle>Vua phá lưới</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-secondary transition-smooth hover-lift scale-in stagger-5">
              <CardHeader>
                <Award className="h-12 w-12 text-secondary mx-auto mb-4 hover:scale-110 transition-smooth" />
                <CardTitle>Thủ môn xuất sắc</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-accent transition-smooth hover-lift scale-in stagger-6">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4 hover:scale-110 transition-smooth" />
                <CardTitle>Cầu thủ yêu thích</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Sẵn sàng tham gia?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Đăng ký đội bóng của bạn ngay hôm nay để tham gia giải đấu
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 hover:scale-110 transition-smooth hover:shadow-2xl"
          >
            <Link href="/register">Đăng ký tham gia ngay</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
