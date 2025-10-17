import Link from "next/link"
import { Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">RIPT Football Cup 2025</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Giải bóng đá 7 người do Viện Khoa học Kỹ thuật Bưu điện tổ chức
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/teams" className="text-muted-foreground hover:text-primary transition-colors">
                  Đội bóng
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Lịch thi đấu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>024 3756 2647</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ript@ptit.edu.vn</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Facebook className="h-4 w-4" />
                <Link href="#" className="hover:text-primary transition-colors">
                  RIPT Football Cup
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Viện Khoa học Kỹ thuật Bưu điện. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
