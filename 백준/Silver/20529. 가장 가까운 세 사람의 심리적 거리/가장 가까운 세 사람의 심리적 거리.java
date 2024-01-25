import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int t = Integer.parseInt(br.readLine());

		while (t-- > 0) {
			int n = Integer.parseInt(br.readLine());
			String[] strs = br.readLine().split(" ");
			if (n <= 48) {
				int minSum = Integer.MAX_VALUE;
				for (int i = 0; i < n; i++) {
					for (int j = i + 1; j < n; j++) {
						for (int k = j + 1; k < n; k++) {
							int sum = 0;
							for (int idx = 0; idx < 4; idx++) {
								if (strs[i].charAt(idx) != strs[j].charAt(idx)) sum++;
								if (strs[i].charAt(idx) != strs[k].charAt(idx)) sum++;
								if (strs[j].charAt(idx) != strs[k].charAt(idx)) sum++;
							}
							if (sum < minSum) minSum = sum;
						}
					}
				}
				sb.append(minSum).append("\n");
			}
			else sb.append("0\n");
		}
		System.out.print(sb);
	}

}
