import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	public static StringBuilder sb = new StringBuilder();
	public static boolean[][] graph;
	public static boolean[] visited;

	public static void DFS(int n) {
		sb.append(n).append(" ");
		visited[n] = true;

		for (int i = 1; i < graph.length; i++) {
			if (graph[n][i] && !visited[i]) DFS(i);
		}
	}

	public static void BFS(int n) {
		Queue<Integer> que = new LinkedList<>();
		que.add(n);
		visited[n] = true;
		
		while(!que.isEmpty()) {
			int p = que.poll();
			sb.append(p).append(" ");
			for (int i = 1; i < graph.length; i++) {
				if (graph[p][i] && !visited[i]) {
					que.add(i);
					visited[i] = true;
				}
			}
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int v = Integer.parseInt(st.nextToken());

		graph = new boolean[n + 1][n + 1];
		while (m-- > 0) {
			st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());
			int y = Integer.parseInt(st.nextToken());
			graph[x][y] = graph[y][x] = true;
		}

		visited = new boolean[n + 1];
		DFS(v);
		sb.append("\n");
		visited = new boolean[n + 1];
		BFS(v);
		System.out.print(sb);
	}
	
}
