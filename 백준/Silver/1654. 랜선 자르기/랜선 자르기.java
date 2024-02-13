import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int k = Integer.parseInt(st.nextToken());
		int n = Integer.parseInt(st.nextToken());

		long[] arr = new long[k];
		long min = Integer.MAX_VALUE;
		long max = Integer.MIN_VALUE;
		for (int i = 0; i < k; i++) {
			arr[i] = Long.parseLong(br.readLine());
			if (arr[i] < min) min = arr[i];
			if (arr[i] > max) max = arr[i];
		}

		long low = 1;
		long high = max;
		while (low <= high) {
			long sum = 0;
			long mid = (low + high) / 2;
			for (int i = 0; i < arr.length; i++) {
				sum += arr[i] / mid;
			}
			if (sum < n) high = mid - 1;
			else if (sum >= n) low = mid + 1;
		}

		System.out.print(high);
	}

}
