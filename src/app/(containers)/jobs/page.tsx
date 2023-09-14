"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Icons } from "@/shared";
import { useAxios } from "@/hooks";
import { endPoints, routeNames } from "../../../static";
import { Capitalize, CapitalizeWord } from "../../../utils";

const { BiEdit, AiFillDelete } = Icons;
const { VIEWJOB, DELETEJOB } = endPoints;
const { JOBDETAILPAGE, JOBACCEPTPAGE, EDITJOB } = routeNames;

const ViewJob = () => {
  const router = useRouter();
  const { callAxios } = useAxios();
  const [job, setJob] = useState<any>([]);

  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = () => {
    callAxios({
      method: "get",
      url: VIEWJOB,
    }).then((res: any) => {
      if (res) {
        setJob(res.data);
      }
    });
  };
  const handleDelete = (id: any) => {
    callAxios({
      method: "delete",
      url: `${DELETEJOB}/${id}`,
    }).then((res: any) => {
      if (res) {
        getData();
      }
    });
  };
  return (
    <div>
      <Typography component="h1" variant="h5">
        All jobs
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#D3D3D3" }}>
              <TableCell>Title</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>JobApplicants</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Publish</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {job.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => router.push(`${JOBDETAILPAGE}/${row.slug}`)}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    href={`${JOBDETAILPAGE}/${row.slug}`}
                  >
                    {" "}
                    {CapitalizeWord(row.title)}
                  </Link>
                </TableCell>
                <TableCell>{CapitalizeWord(row.designationId.Name)}</TableCell>
                <TableCell>{CapitalizeWord(row.salaryrange)}</TableCell>

                <TableCell>
                  {row.status === "reject" ? (
                    <Chip
                      size="small"
                      color="error"
                      style={{ padding: "5px" }}
                      label={Capitalize(row.status)}
                    />
                  ) : row.status === "pending" ? (
                    <Chip
                      size="small"
                      color="warning"
                      style={{ padding: "5px 5px 5px 5px" }}
                      label={Capitalize(row.status)}
                    />
                  ) : (
                    <Chip
                      size="small"
                      color="success"
                      style={{ padding: "5px" }}
                      label={Capitalize(row.status)}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    href={`${JOBDETAILPAGE}/${row._id}`}
                  >
                    {" "}
                    {row.applicationCount}
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ minWidth: "auto", padding: 3 }}
                    onClick={() => router.push(`${EDITJOB}/${row._id}`)}
                    size="small"
                  >
                    <BiEdit />
                  </Button>
                  <Button
                    style={{ minWidth: "auto", padding: 3 }}
                    onClick={() => handleDelete(row._id)}
                  >
                    <AiFillDelete />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ minWidth: "auto", padding: 3 }}
                    onClick={() => router.push(`${JOBACCEPTPAGE}/${row.slug}`)}
                    disabled={row.status !== "pending"}
                  >
                    Publish
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewJob;
