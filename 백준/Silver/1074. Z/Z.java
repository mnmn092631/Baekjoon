import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static int count = 0;

	public static void getCount(int n, int r, int c) {
		int flag = (int) Math.pow(2, n - 1);
		if (n == 1) {
			if (r == c) {
				if (r == 0) return;
				else count += 3;
			} else {
				if (r == 0) count += 1;
				else count += 2;
			}
		} else {
			if (r >= flag && c >= flag) {
				count += (int)Math.pow(4, n - 1) * 3;
				getCount(n - 1, r - flag, c - flag);
			} else if (r >= flag) {
				count += (int)Math.pow(4, n - 1) * 2;
				getCount(n - 1, r - flag, c);
			} else if (c >= flag) {
				count += (int)Math.pow(4, n - 1);
				getCount(n - 1, r, c - flag);
			} else {
				getCount(n - 1, r, c);
			}

		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int r = Integer.parseInt(st.nextToken());
		int c = Integer.parseInt(st.nextToken());

		getCount(n, r, c);
		System.out.print(count);
	}

}
