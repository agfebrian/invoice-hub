import { Box, Grid2, Skeleton } from "@mui/material";

const heightSkeleton = 50;

export default function SkeletonTable() {
  return (
    <Box>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid2 key={item} container spacing={2}>
          <Grid2 size={3}>
            <Skeleton height={heightSkeleton} />
          </Grid2>
          <Grid2 size={3}>
            <Skeleton height={heightSkeleton} />
          </Grid2>
          <Grid2 size={3}>
            <Skeleton height={heightSkeleton} />
          </Grid2>
          <Grid2 size={3}>
            <Skeleton height={heightSkeleton} />
          </Grid2>
        </Grid2>
      ))}
    </Box>
  );
}
