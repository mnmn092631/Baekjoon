import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		char[][] board = new char[n][m];
		for (int i = 0; i < n; i++) {
			String str = br.readLine();
			for (int j = 0; j < m; j++) {
				board[i][j] = str.charAt(j);
			}
		}

		int min = Integer.MAX_VALUE;
		for (int i = 0; i < n - 7; i++) {
			for (int j = 0; j < m - 7; j++) {
				int bSum = 0;
				int wSum = 0;
				for (int a = i; a < i + 8; a++) {
					for (int b = j; b < j + 8; b++) {
						char color = board[a][b];
						// B로 시작할 때
						if (a % 2 == b % 2) {
							if (color == 'W') bSum += 1;
							else wSum += 1;
						}
						// W로 시작할 때
						else {
							if (color == 'W') wSum += 1;
							else bSum += 1;
						}
					}
				}
				min = Math.min(min, Math.min(wSum, bSum));
			}
		}

		System.out.print(min);
	}

}
