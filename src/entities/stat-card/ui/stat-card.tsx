import { WordUsageStats } from "@/shared/utils/textcounter";
import { Card, CardContent, Typography } from "@mui/material";

export const StatCard = ({ count, word, variations }: WordUsageStats) => {
  return (
    <Card>
      <CardContent sx={{ padding: "1rem 2rem" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Кол-во повторений: {count}
        </Typography>
        <Typography variant="h5" component="div">
          {word}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Вариации: {[...variations].join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
};
