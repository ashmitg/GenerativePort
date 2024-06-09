import React from 'react';

import { CardHeader, Card, CardContent, CardDescription } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle } from "@/components/ui/card";
export function AnalyticsSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white-100  px-4 md:px-6 flex items-center h-16 border-b">
        <h1 className="text-xl font-semibold">Pitch Performance</h1>
        <div className="ml-auto flex items-center gap-4"></div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-6 animate-pulse">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
              <CardDescription>Total Clicks</CardDescription>
              <div className="h-6 w-16 bg-gray-200 rounded mt-2" />
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
              <CardDescription>Number of Pitches</CardDescription>
              <div className="h-6 w-16 bg-gray-200 rounded mt-2" />
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
              <CardDescription>Pitch Open Rate</CardDescription>
              <div className="h-6 w-16 bg-gray-200 rounded mt-2" />
              </CardHeader>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg w-full">
                <div className="relative w-full overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pitch Title</TableHead>
                        <TableHead>Target URL</TableHead>
                        <TableHead className="text-right">
                          Total Clicks
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 15 }).map((_, index) => (
                        <React.Fragment key={index}>
                          <TableRow>

                            <TableCell>
                              <div className="h-4 w-24 bg-gray-200 rounded" />
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="h-4 w-36 bg-gray-200 rounded" />
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="h-4 w-full bg-gray-200 rounded" />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
