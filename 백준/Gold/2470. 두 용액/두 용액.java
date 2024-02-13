import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n];

		StringTokenizer st = new StringTokenizer(br.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(arr);

		int min = Integer.MAX_VALUE;
		int[] result = new int[2];
		for (int i = 0; i < arr.length; i++) {
			int index = Arrays.binarySearch(arr, 0 - arr[i]);

			if (index < 0) index = (index + 1) * -1;
			
			for(int j = -1; j < 2; j++) {
				int idx = index - j;
				
				if (idx < 0 || idx >= arr.length || i == idx) continue;

				int com = Math.abs(arr[i] + arr[idx]);
				if (com < min) {
					min = com;
					result[0] = arr[i];
					result[1] = arr[idx];
				}
			}
		}

		sb.append(result[0]).append(" ").append(result[1]);
		System.out.print(sb);
	}

}
