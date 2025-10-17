"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useApiMutation } from "@/src/hooks/use-api"
import { toast } from "sonner"
import { UserPlus, Mail, Phone, Users, FileText } from "lucide-react"

const Schema = z.object({
  teamName: z.string().min(2, "Tên đội tối thiểu 2 ký tự"),
  teamType: z.string().min(1, "Chọn loại đội"),
  captainName: z.string().min(2, "Tên đội trưởng tối thiểu 2 ký tự"),
  captainEmail: z.string().email("Email không hợp lệ"),
  captainPhone: z.string().min(9, "SĐT không hợp lệ"),
  numberOfPlayers: z.string().min(1, "Chọn số lượng cầu thủ"),
  additionalInfo: z.string().optional().default(""),
  agreeToRules: z.boolean().refine((v) => v === true, { message: "Bạn cần đồng ý điều khoản" }),
})

type FormValues = z.infer<typeof Schema>

export default function RegisterPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      teamName: "",
      teamType: "",
      captainName: "",
      captainEmail: "",
      captainPhone: "",
      numberOfPlayers: "",
      additionalInfo: "",
      agreeToRules: false,
    },
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const registerMutation = useApiMutation<unknown, { message: string }, FormValues>("post", "/posts", {
    onSuccess: () => {
      toast.success("Đăng ký thành công!")
      setIsSubmitted(true)
      form.reset()
    },
    onError: (err: any) => {
      toast.error(err?.message || "Có lỗi xảy ra")
    },
  })

  const onSubmit = (values: FormValues) => {
    registerMutation.mutate(values)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Đăng ký tham gia</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Điền thông tin đội bóng của bạn để tham gia RIPT Football Cup 2025
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Registration Info */}
        <Card className="mb-8 border-2 border-primary hover:border-secondary transition-smooth hover-lift slide-up">
          <CardHeader>
            <CardTitle className="text-2xl">Thông tin đăng ký</CardTitle>
            <CardDescription>Vui lòng đọc kỹ trước khi đăng ký</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2 hover:translate-x-2 transition-smooth">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <p>Mỗi đội có tối thiểu 11 cầu thủ và tối đa 18 cầu thủ</p>
            </div>
            <div className="flex items-start gap-2 hover:translate-x-2 transition-smooth">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <p>Đội trưởng chịu trách nhiệm liên lạc và quản lý đội bóng</p>
            </div>
            <div className="flex items-start gap-2 hover:translate-x-2 transition-smooth">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <p>Hạn chót đăng ký: 10/03/2025</p>
            </div>
            <div className="flex items-start gap-2 hover:translate-x-2 transition-smooth">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <p>Lệ phí đăng ký: 500.000 VNĐ/đội (bao gồm áo đấu và bóng)</p>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card className="scale-in">
          <CardHeader>
            <CardTitle className="text-2xl">Biểu mẫu đăng ký</CardTitle>
            <CardDescription>Điền đầy đủ thông tin bên dưới</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 fade-in">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto scale-in">
                  <svg
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Đăng ký thành công!</h3>
                <p className="text-muted-foreground">Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Team Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Thông tin đội bóng
                  </h3>

                  <div className="space-y-2 slide-up stagger-1">
                    <Label htmlFor="teamName">
                      Tên đội <span className="text-red-500">*</span>
                    </Label>
                    <Input id="teamName" placeholder="VD: UDU K67" className="transition-smooth focus:scale-[1.02] focus:shadow-lg" {...form.register("teamName")} />
                  </div>

                  <div className="space-y-2 slide-up stagger-2">
                    <Label htmlFor="teamType">
                      Loại đội <span className="text-red-500">*</span>
                    </Label>
                    <Select value={form.watch("teamType")} onValueChange={(value) => form.setValue("teamType", value, { shouldValidate: true })}>
                      <SelectTrigger id="teamType" className="transition-smooth focus:scale-[1.02] focus:shadow-lg">
                        <SelectValue placeholder="Chọn loại đội" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class-udu">Lớp UDU</SelectItem>
                        <SelectItem value="class-aiot">Lớp AiOT</SelectItem>
                        <SelectItem value="lecturer">Giảng viên</SelectItem>
                        <SelectItem value="guest">Khách mời</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 slide-up stagger-3">
                    <Label htmlFor="numberOfPlayers">
                      Số lượng cầu thủ <span className="text-red-500">*</span>
                    </Label>
                    <Select value={form.watch("numberOfPlayers")} onValueChange={(value) => form.setValue("numberOfPlayers", value, { shouldValidate: true })}>
                      <SelectTrigger
                        id="numberOfPlayers"
                        className="transition-smooth focus:scale-[1.02] focus:shadow-lg"
                      >
                        <SelectValue placeholder="Chọn số lượng cầu thủ" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 8 }, (_, i) => i + 11).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} cầu thủ
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Captain Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-secondary" />
                    Thông tin đội trưởng
                  </h3>

                  <div className="space-y-2 slide-up stagger-1">
                    <Label htmlFor="captainName">
                      Họ và tên <span className="text-red-500">*</span>
                    </Label>
                    <Input id="captainName" placeholder="Nguyễn Văn A" className="transition-smooth focus:scale-[1.02] focus:shadow-lg" {...form.register("captainName")} />
                  </div>

                  <div className="space-y-2 slide-up stagger-2">
                    <Label htmlFor="captainEmail">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground transition-smooth" />
                      <Input id="captainEmail" type="email" placeholder="email@example.com" className="pl-10 transition-smooth focus:scale-[1.02] focus:shadow-lg" {...form.register("captainEmail")} />
                    </div>
                  </div>

                  <div className="space-y-2 slide-up stagger-3">
                    <Label htmlFor="captainPhone">
                      Số điện thoại <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground transition-smooth" />
                      <Input id="captainPhone" type="tel" placeholder="0123456789" className="pl-10 transition-smooth focus:scale-[1.02] focus:shadow-lg" {...form.register("captainPhone")} />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    Thông tin bổ sung
                  </h3>

                  <div className="space-y-2 slide-up">
                    <Label htmlFor="additionalInfo">Ghi chú (không bắt buộc)</Label>
                    <Textarea id="additionalInfo" placeholder="Thông tin thêm về đội bóng của bạn..." rows={4} className="transition-smooth focus:scale-[1.02] focus:shadow-lg" {...form.register("additionalInfo")} />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2 slide-up">
                  <Checkbox id="agreeToRules" checked={form.watch("agreeToRules")} onCheckedChange={(checked) => form.setValue("agreeToRules", Boolean(checked), { shouldValidate: true })} className="transition-smooth hover:scale-110" />
                  <label
                    htmlFor="agreeToRules"
                    className="text-sm leading-relaxed cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tôi đồng ý với{" "}
                    <a href="/about" className="text-primary hover:underline transition-smooth">
                      thể lệ và quy định
                    </a>{" "}
                    của giải đấu <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full hover:scale-105 transition-smooth hover:shadow-xl" disabled={registerMutation.isPending || !form.watch("agreeToRules")}>{registerMutation.isPending ? "Đang gửi..." : "Đăng ký tham gia"}</Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="mt-8 slide-up hover-lift">
          <CardHeader>
            <CardTitle>Liên hệ hỗ trợ</CardTitle>
            <CardDescription>Nếu bạn cần hỗ trợ, vui lòng liên hệ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="hover:translate-x-2 transition-smooth">
              <strong>Email:</strong> riptfootballcup@ptit.edu.vn
            </p>
            <p className="hover:translate-x-2 transition-smooth">
              <strong>Hotline:</strong> 024 1234 5678
            </p>
            <p className="hover:translate-x-2 transition-smooth">
              <strong>Địa chỉ:</strong> Viện Khoa học Kỹ thuật Bưu Điện, Học viện Công nghệ Bưu chính Viễn thông
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
