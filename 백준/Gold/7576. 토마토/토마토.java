import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	public static int[][] graph;
	public static Queue<int[]> que = new LinkedList<>();
	public static int total;

	public static int BFS() {
		int count = 0;
		int r = graph.length;
		int c = graph[0].length;
		
		while(!que.isEmpty()) {
			int[] v = que.poll();
			int i = v[0];
			int j = v[1];
			total--;
			graph[i][j] = 2;
			count = v[2];

			if (i - 1 >= 0 && graph[i - 1][j] == 0) {
				que.add(new int[] {i - 1, j, count + 1});
				graph[i-1][j] = 2;
			}
			if (i + 1 < r && graph[i + 1][j] == 0) {
				que.add(new int[] {i + 1, j, count + 1});
				graph[i+1][j] = 2;
			}
			if (j - 1 >= 0 && graph[i][j - 1] == 0) {
				que.add(new int[] {i, j - 1, count + 1});
				graph[i][j- 1] = 2;
			}
			if (j + 1 < c && graph[i][j + 1] == 0) {
				que.add(new int[] {i, j + 1, count + 1});
				graph[i][j + 1] = 2;
			}
		}
		if(total != 0) return -1;
		return count;
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int m = Integer.parseInt(st.nextToken());
		int n = Integer.parseInt(st.nextToken());

		graph = new int[n][m];
		total = n * m;

		for (int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < m; j++) {
				graph[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if (graph[i][j] == 1) que.add(new int[] {i, j, 0});
				if(graph[i][j] == -1) total--;
			}
		}
		
		System.out.print(BFS());
	}

}
