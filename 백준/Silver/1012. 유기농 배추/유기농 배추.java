import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static int[][] graph;

	public static void DFS(int i, int j) {
		graph[i][j] = 2;
		int r = graph.length;
		int c = graph[0].length;

		if (i - 1 >= 0 && graph[i - 1][j] == 1) DFS(i - 1, j);
		if (i + 1 < r && graph[i + 1][j] == 1) DFS(i + 1, j);
		if (j - 1 >= 0 && graph[i][j - 1] == 1) DFS(i, j - 1);
		if (j + 1 < c && graph[i][j + 1] == 1) DFS(i, j + 1);
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();

		int t = Integer.parseInt(br.readLine());

		while (t-- > 0) {
			st = new StringTokenizer(br.readLine());
			int m = Integer.parseInt(st.nextToken());
			int n = Integer.parseInt(st.nextToken());
			int k = Integer.parseInt(st.nextToken());

			graph = new int[n][m];
			for (int i = 0; i < k; i++) {
				st = new StringTokenizer(br.readLine());
				int x = Integer.parseInt(st.nextToken());
				int y = Integer.parseInt(st.nextToken());
				graph[y][x] = 1;
			}

			int count = 0;
			for (int i = 0; i < n; i++) {
				for (int j = 0; j < m; j++) {
					if (graph[i][j] == 1) {
						DFS(i, j);
						count++;
					}
				}
			}
			sb.append(count).append("\n");
		}
		
		System.out.print(sb);
	}

}
