"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useApiQuery } from "@/src/hooks/use-api"

type ApiTeam = {
  id: number
  name: string
  type: "CLASS" | "LECTURER" | "GUEST"
  description: string
  logo_url: string
}

type ApiResponse = {
  http_code: number
  success: boolean
  message: string | null
  metadata: { page: number; page_size: number; total: number }
  data: ApiTeam[]
}

const typeLabels = {
  class: { label: "Lớp học", color: "bg-primary text-primary-foreground" },
  lecturer: { label: "Giảng viên", color: "bg-accent text-accent-foreground" },
  guest: { label: "Khách mời", color: "bg-secondary text-secondary-foreground" },
}

function normalizeType(t: ApiTeam["type"]) {
  const lower = t.toLowerCase()
  if (lower === "class") return "class" as const
  if (lower === "lecturer") return "lecturer" as const
  return "guest" as const
}

export default function TeamsPage() {
  const { data, isLoading, isError } = useApiQuery<ApiResponse>(
    ["teams", 20, 0],
    "https://live-code-be.ript.vn/api/v1/teams-tournament?limit=20&offset=0"
  )

  const teams = (data?.data || []).map((t) => ({
    id: t.id,
    name: t.name,
    description: t.description,
    type: normalizeType(t.type),
    logoUrl: t.logo_url,
  }))

  const classTeams = teams.filter((t) => t.type === "class")
  const lecturerTeams = teams.filter((t) => t.type === "lecturer")
  const guestTeams = teams.filter((t) => t.type === "guest")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Đội bóng tham gia</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Danh sách đội tham gia giải
        </p>
      </div>

      {isLoading && <div className="text-center py-8">Đang tải danh sách đội...</div>}
      {isError && <div className="text-center py-8 text-red-600">Tải dữ liệu thất bại. Vui lòng thử lại.</div>}

      {!isLoading && !isError && (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">{classTeams.length}</CardTitle>
                <CardDescription className="text-center">Đội lớp học</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-accent">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">{lecturerTeams.length}</CardTitle>
                <CardDescription className="text-center">Đội giảng viên</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 border-secondary">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">{guestTeams.length}</CardTitle>
                <CardDescription className="text-center">Đội khách mời</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Tất cả</TabsTrigger>
              <TabsTrigger value="class">Lớp học</TabsTrigger>
              <TabsTrigger value="lecturer">Giảng viên</TabsTrigger>
              <TabsTrigger value="guest">Khách mời</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="class">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lecturer">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lecturerTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guest">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guestTeams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  )
}

function TeamCard({ team }: { team: { id: number; name: string; description: string; type: "class" | "lecturer" | "guest"; logoUrl: string } }) {
  const typeInfo = typeLabels[team.type]
  return (
    <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Shield className="h-12 w-12 text-muted-foreground" />
          <Badge className={typeInfo.color}>{typeInfo.label}</Badge>
        </div>
        <CardTitle className="text-xl">{team.name}</CardTitle>
        <CardDescription>{team.description}</CardDescription>
      </CardHeader>
      <CardContent>{/* Có thể hiển thị logo nếu API cung cấp */}</CardContent>
    </Card>
  )
}
