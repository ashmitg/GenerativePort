"use client"
import { MdRefresh } from 'react-icons/md'; // Importing the refresh icon

import {
  CardDescription,
  CardTitle,
  CardHeader,
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { AnalyticsSkeleton } from "./analytics-skeleton";
import { useGlobalAuth } from "@/lib/context";
import { GetAnalytics } from "@/actions/analytics/action";
import { useEffect, useState, Fragment } from "react"


interface IAnalyticsData {
  id: string;
  views: number;
  created: string;
  title: string;
}

interface IResult {
  uniqueClicks: number;
  totalClicks: number;
  totalPitches: number;
}

export function Analytics() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const authContext = useGlobalAuth();
  const uid = authContext ? authContext.uid : null;
  const baseUrl = window.location.origin;

  useEffect(() => {
    const getAnalyticsData = async () => {
      if (uid) {
        
        try {
          let res = await GetAnalytics(uid);
          const result = res.reduce((acc: IResult, obj: any) => {
            if (obj.views > 0) {
              acc.uniqueClicks += 1;
              acc.totalClicks += obj.views;
            }
            acc.totalPitches += 1;
            return acc;
          }, { uniqueClicks: 0, totalClicks: 0, totalPitches: 0 } as IResult);
          
          let sortedData = (res as IAnalyticsData[]).sort((a, b) => {
            return new Date(b.created).getTime() - new Date(a.created).getTime();
          });

          setAnalyticsData(result);
          setData(sortedData);

        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }

      }

      return true;
    }
    getAnalyticsData();


  }, [loading, uid])
  return (
    <div>
      {loading ? <AnalyticsSkeleton /> : (
        <div className="flex flex-col min-h-screen">
          <header className="bg-white-100  px-4 md:px-6 flex items-center h-16 border-b">
            <h1 className="text-xl font-semibold">Pitch Performance</h1>
            <div className="ml-auto flex items-center gap-4"></div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            <div className="grid gap-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardDescription>Total Clicks</CardDescription>
                    <CardTitle>{analyticsData?.totalClicks}</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardDescription>Number of Pitches</CardDescription>
                    <CardTitle>{analyticsData?.totalPitches}</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardDescription>Pitch Open Rate</CardDescription>
                    <CardTitle>
                      {((analyticsData?.uniqueClicks / analyticsData?.totalPitches) * 100).toFixed(1)}%
                    </CardTitle>

                  </CardHeader>
                </Card>
              </div>
              <Card>

                <CardHeader>
                  <div className="flex justify-between">
                    <CardTitle>Tracking</CardTitle>
                    <button onClick={() => setLoading(true)} disabled={loading} style={{ border: 'none', background: 'none' }}>
                      <MdRefresh style={{ fontSize: '24px' }} />
                    </button>
                  </div>
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

                          {data && data.map((element: IAnalyticsData) =>
                            <Fragment key={element.id}>
                              <TableRow>
                                <TableCell className="font-medium">
                                  {element.title}
                                </TableCell>
                                <TableCell>{`${baseUrl}/${element.id}`}</TableCell>

                                <TableCell className="text-right">{element.views}</TableCell>
                              </TableRow>
                            </Fragment>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>)}

    </div>

  );
}
