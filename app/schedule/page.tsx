"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { useApiQuery } from "@/src/hooks/use-api"

type ApiResponse<T> = {
  http_code: number
  success: boolean
  message: string | null
  metadata: { page: number; page_size: number; total: number }
  data: T
}

type ApiMatch = {
  id: number
  created_at: string
  updated_at: string | null
  group_id: number
  team1_id: number
  team2_id: number
  stage: string
  date: string
  time: string
  location: string
  score1: number | null
  score2: number | null
  winner_id: number | null
  penalty1: number | null
  penalty2: number | null
  status: "upcoming" | "finished" | "live"
}

type ApiGroup = {
  id: number
  created_at: string
  updated_at: string | null
  name: string
  description: string
}

type ApiTeam = { id: number; name: string }

export default function SchedulePage() {
  const [selectedGroup, setSelectedGroup] = useState<number | "all">("all")

  const groupsQuery = useApiQuery<ApiResponse<ApiGroup[]>>(
    ["groups"],
    "https://live-code-be.ript.vn/api/v1/groups"
  )

  const teamsQuery = useApiQuery<ApiResponse<ApiTeam[]>>(
    ["teams", 100],
    "https://live-code-be.ript.vn/api/v1/teams-tournament?limit=100&offset=0"
  )

  const matchesUrl =
    selectedGroup === "all"
      ? "https://live-code-be.ript.vn/api/v1/matches?limit=200&offset=0"
      : `https://live-code-be.ript.vn/api/v1/matches/group/${selectedGroup}`

  const matchesQuery = useApiQuery<ApiResponse<ApiMatch[]>>(
    ["matches", selectedGroup],
    matchesUrl
  )

  const teamIdToName = new Map<number, string>(
    (teamsQuery.data?.data || []).map((t: ApiTeam) => [t.id, t.name])
  )

  const groups = groupsQuery.data?.data || []
  const matches = matchesQuery.data?.data || []

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lịch thi đấu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Theo dõi lịch thi đấu vòng bảng (vòng loại trực tiếp: chưa có)
        </p>
      </div>

      <Tabs defaultValue="group" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="group">Vòng bảng</TabsTrigger>
          <TabsTrigger value="knockout" disabled>
            Vòng loại trực tiếp
          </TabsTrigger>
        </TabsList>

        {/* Group Stage */}
        <TabsContent value="group">
          <div className="space-y-8">
            {/* Group filter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Chọn bảng</CardTitle>
                <CardDescription>Lọc lịch theo từng bảng hoặc xem tất cả</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 rounded-md border ${selectedGroup === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                    onClick={() => setSelectedGroup("all")}
                  >
                    Tất cả
                  </button>
                  {groups.map((g) => (
                    <button
                      key={g.id}
                      className={`px-3 py-1 rounded-md border ${selectedGroup === g.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                      onClick={() => setSelectedGroup(g.id)}
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Loading/Error */}
            {(groupsQuery.isLoading || teamsQuery.isLoading || matchesQuery.isLoading) && (
              <div className="text-center py-8">Đang tải dữ liệu...</div>
            )}
            {(groupsQuery.isError || teamsQuery.isError || matchesQuery.isError) && (
              <div className="text-center py-8 text-red-600">Có lỗi khi tải dữ liệu. Vui lòng thử lại.</div>
            )}

            {!matchesQuery.isLoading && !matchesQuery.isError && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {selectedGroup === "all"
                      ? "Tất cả trận đấu"
                      : `Bảng ${groups.find((g) => g.id === selectedGroup)?.name || selectedGroup}`}
                  </CardTitle>
                  <CardDescription>Vòng bảng</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ngày giờ</TableHead>
                          <TableHead>Đội 1</TableHead>
                          <TableHead className="text-center">Tỷ số</TableHead>
                          <TableHead>Đội 2</TableHead>
                          <TableHead>Địa điểm</TableHead>
                          <TableHead>Trạng thái</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {matches.map((m) => (
                          <TableRow key={m.id}>
                            <TableCell>
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span>{new Date(m.date).toLocaleDateString("vi-VN")}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="h-4 w-4" />
                                  <span>{m.time}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{teamIdToName.get(m.team1_id) || `#${m.team1_id}`}</TableCell>
                            <TableCell className="text-center">
                              {m.score1 !== null && m.score2 !== null ? (
                                <Badge variant="secondary" className="text-lg px-4">
                                  {m.score1} - {m.score2}
                                </Badge>
                              ) : (
                                <Badge variant="outline">vs</Badge>
                              )}
                            </TableCell>
                            <TableCell className="font-medium">{teamIdToName.get(m.team2_id) || `#${m.team2_id}`}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{m.location}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  m.status === "finished" ? "secondary" : m.status === "live" ? "default" : "outline"
                                }
                              >
                                {m.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* Knockout Stage (disabled placeholder) */}
        <TabsContent value="knockout">
          <div className="text-center py-20 text-muted-foreground">Vòng loại trực tiếp hiện chưa có dữ liệu.</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
