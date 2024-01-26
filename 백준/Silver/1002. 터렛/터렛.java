import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();

		int t = Integer.parseInt(br.readLine());

		while (t-- > 0) {
			st = new StringTokenizer(br.readLine());
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int r1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			int r2 = Integer.parseInt(st.nextToken());

			int dif = (r2 - r1) * (r2 - r1);
			int sum = (r1 + r2) * (r1 + r2);
			int d = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

			if (d == 0 && dif == 0) {
				if(r1 == 0 && r2 == 0) {
					sb.append("1\n");
				}
				else sb.append("-1\n");
			} else if (sum == d || dif == d) {
				sb.append("1\n");
			} else if (d < dif || sum < d) {
				sb.append("0\n");
			} else {
				sb.append("2\n");
			}
		}

		System.out.print(sb);
	}

}
